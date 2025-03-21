import { Group, Text } from "@mantine/core";
import DateFilterMenu from "../../../General/filterMenu";
import { salesCustomer } from "../../../../utils/mockData";
import { ArrowUpRight } from "lucide-react";

const CustomerAnalysis = () => {
  return (
    <main className="flex gap-3">
      <div className="w-[40%] h-auto px-4 py-8 rounded-lg bg-white">
        <div className="flex flex-col">
          <Text size="xl" fw={600} c="textSecondary.9">
            Popular Products
          </Text>
          <span className="text-gray-400 font-normal">
            An overview of sales made
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {salesCustomer.map((data, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{<data.usericon />}</span>
              <div className="flex justify-start items-start text-start flex-col">
                <Text size="lg" fw={400} c="textSecondary.9">
                  {data.customerName}
                </Text>
                <span className="text-gray-400 font-normal">{data.email}</span>
              </div>
              <ArrowUpRight color="#003399" />
              <hr color="#003399" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[60%] h-auto px-4 py-8 rounded-lg bg-white">
        <div className="flex justify-between items-center">
          <div className="flex-col ">
            <Text size="xl" fw={600} c="textSecondary.9">
              Division Sale Overview
            </Text>
            <span className="text-gray-400 font-normal">
              An overview of sales made
            </span>
          </div>
          <Group>
            <DateFilterMenu
              defaultFilter="This Month"
              buttonVariant="subtle"
              buttonSize="md"
            />
          </Group>
        </div>
      </div>
    </main>
  );
};

export default CustomerAnalysis;
