import { FC, useState } from "react";
import { Menu, Button, Box } from "@mantine/core";
import { SortOption, TableRowData } from "../../../types";

interface SortFilterProps {
  data: TableRowData[];
  onSort: (data: TableRowData[]) => void;
  sortOptions: SortOption[];
}

const SortFilter: FC<SortFilterProps> = ({ data, onSort, sortOptions }) => {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const handleSort = (option: SortOption) => {
    // Toggle direction if clicking the same option again
    if (activeOption === option.key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setActiveOption(option.key);
      setSortDirection(option.defaultDirection || "asc");
    }

    const direction =
      activeOption === option.key
        ? sortDirection === "asc"
          ? "desc"
          : "asc"
        : option.defaultDirection || "asc";

    const sortType = option.type || "string";

    const sortedData = [...data].sort((a, b) => {
      const valueA = option.key
        .split(".")
        .reduce((obj: TableRowData, k) => obj?.[k], a);
      const valueB = option.key
        .split(".")
        .reduce((obj: TableRowData, k) => obj?.[k], b);

      if (valueA === null || valueA === undefined)
        return direction === "asc" ? 1 : -1;
      if (valueB === null || valueB === undefined)
        return direction === "asc" ? -1 : 1;

      if (sortType === "date") {
        // Assuming the date is stored in a property like 'dateField'
        const dateA = new Date(valueA.dateField).getTime();
        const dateB = new Date(valueB.dateField).getTime();

        if (isNaN(dateA) || isNaN(dateB)) {
          return direction === "asc"
            ? String(valueA).localeCompare(String(valueB))
            : String(valueB).localeCompare(String(valueA));
        }

        return direction === "asc" ? dateA - dateB : dateB - dateA;
      } else if (sortType === "number") {
        const numA = Number(valueA);
        const numB = Number(valueB);

        if (isNaN(numA) || isNaN(numB)) {
          return direction === "asc"
            ? String(valueA).localeCompare(String(valueB))
            : String(valueB).localeCompare(String(valueA));
        }

        return direction === "asc" ? numA - numB : numB - numA;
      } else {
        // String handling (case-insensitive)
        const strA = String(valueA).toLowerCase();
        const strB = String(valueB).toLowerCase();

        return direction === "asc"
          ? strA.localeCompare(strB)
          : strB.localeCompare(strA);
      }
    });

    onSort(sortedData);
  };

  if (!sortOptions?.length) return null;

  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <Button
          variant="outline"
          styles={{
            root: {
              padding: "0.5rem",
              backgroundColor: "transparent",
              border: "1px solid var(--mantine-color-gray-3)",
              borderRadius: "0.375rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            },
          }}
        >
          sort
        </Button>
      </Menu.Target>
      <Menu.Dropdown style={{ minWidth: "200px" }}>
        {sortOptions.map((option) => (
          <Menu.Item
            key={option.key}
            styles={{
              item: {
                backgroundColor:
                  activeOption === option.key
                    ? "var(--mantine-color-gray-1)"
                    : undefined,
              },
            }}
            onClick={() => handleSort(option)}
          >
            <Box
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              {option.icon}
              <span>
                {option.label}
                {activeOption === option.key && (
                  <span
                    style={{
                      marginLeft: "0.25rem",
                      fontSize: "0.875rem",
                      color: "var(--mantine-color-gray-6)",
                    }}
                  >
                    ({sortDirection === "asc" ? "↑" : "↓"})
                  </span>
                )}
              </span>
            </Box>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default SortFilter;
