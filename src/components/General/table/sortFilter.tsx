import { FC, useState } from "react";
import { Menu, Button, Box, Text } from "@mantine/core";
import { ChevronDown } from "lucide-react";

interface TableRowData {
  [key: string]: unknown;
  name?: string;
  createdAt?: string | Date;
}

interface SortFilterProps {
  data: TableRowData[];
  onSort: (data: TableRowData[]) => void;
}

const SortFilter: FC<SortFilterProps> = ({ data, onSort }) => {
  const [activeOption, setActiveOption] = useState<string>("All");

  const sortOptions = [
    { label: "All", key: "all" },
    { label: "Recent", key: "recent" },
    { label: "Oldest", key: "oldest" },
    { label: "A-Z", key: "a-z" },
    { label: "Z-A", key: "z-a" },
  ];

  const handleSort = (optionKey: string) => {
    setActiveOption(optionKey);

    const sortedData = [...data];

    switch (optionKey) {
      case "recent":
        sortedData.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
        break;
      case "oldest":
        sortedData.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateA - dateB;
        });
        break;
      case "a-z":
        sortedData.sort((a, b) => {
          const nameA = typeof a.name === "string" ? a.name : "";
          const nameB = typeof b.name === "string" ? b.name : "";
          return nameA.localeCompare(nameB);
        });
        break;
      case "z-a":
        sortedData.sort((a, b) => {
          const nameA = typeof a.name === "string" ? a.name : "";
          const nameB = typeof b.name === "string" ? b.name : "";
          return nameB.localeCompare(nameA);
        });
        break;
      default:
        // "All" case - no sorting needed
        break;
    }

    onSort(sortedData);
  };

  return (
    <Box style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Text size="md" fw={500} c="black">
        Sort By:
      </Text>
      <Menu position="bottom-end">
        <Menu.Target>
          <Button
            variant="outline"
            size="sm"
            styles={{
              root: {
                padding: "0.30rem 0.9rem",
                backgroundColor: "transparent",
                border: "1px solid var(--mantine-color-gray-3)",
                borderRadius: "0.375rem",
                color: "#475367",
                fontSize: "15px",
                textTransform: "capitalize",
              },
            }}
          >
            {activeOption}
            <ChevronDown />
          </Button>
        </Menu.Target>
        <Menu.Dropdown style={{ minWidth: "120px" }}>
          {sortOptions.map((option) => (
            <Menu.Item
              key={option.key}
              onClick={() => handleSort(option.key)}
              styles={{
                item: {
                  backgroundColor:
                    activeOption === option.key
                      ? "var(--mantine-color-gray-1)"
                      : undefined,
                },
              }}
            >
              {option.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default SortFilter;
