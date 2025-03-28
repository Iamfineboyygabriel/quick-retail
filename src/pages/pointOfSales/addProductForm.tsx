import { Checkbox, Select, Switch, TextInput } from "@mantine/core";
import { CalendarIcon } from "lucide-react";

const AddProductForm = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200">
          BASIC INFORMATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            label="Product Name"
            placeholder="Enter product name"
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />

          <TextInput
            label={
              <span>
                Barcode –{" "}
                <a href="#" className="text-blue-500">
                  Scan barcode
                </a>
              </span>
            }
            placeholder="Enter barcode"
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />

          <TextInput
            label="SKU (Store Keeping Unit)"
            placeholder="Enter SKU"
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />

          <Select
            label="Category"
            placeholder="Select product category"
            data={["Category 1", "Category 2", "Category 3"]}
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />

          <Select
            label="Sub-category"
            placeholder="Select sub-category"
            data={["Sub-category 1", "Sub-category 2"]}
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />

          <Select
            label="Supplier"
            placeholder="Enter supplier"
            data={["Supplier 1", "Supplier 2"]}
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-[3em]">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200">
          PRICING INFORMATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <TextInput
              label="Cost Price"
              placeholder="₦"
              classNames={{
                input:
                  "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
                label: "text-gray-800 font-medium",
                wrapper: "w-full",
              }}
              styles={{
                input: { fontSize: "18px", height: "56px" },
              }}
            />
            <Checkbox
              label="Apply to Variations"
              className="mt-2 text-gray-600"
            />
          </div>

          <div>
            <TextInput
              label="Selling Price"
              placeholder="₦"
              classNames={{
                input:
                  "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
                label: "text-gray-800 font-medium",
                wrapper: "w-full",
              }}
              styles={{
                input: { fontSize: "18px", height: "56px" },
              }}
            />
            <Checkbox
              label="Apply to Variations"
              className="mt-2 text-gray-600"
            />
          </div>

          <Select
            label="Tax %"
            placeholder="Select tax percentage"
            data={["0%", "5%", "10%", "15%"]}
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />

          {/* Discount */}
          <TextInput
            label={
              <span>
                Discount <span className="text-gray-500">(optional)</span>
              </span>
            }
            placeholder=""
            rightSection="⏳"
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-[3em] bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          PRODUCT VARIATIONS
        </h2>
        <Switch onLabel="On" offLabel="Off" size="md" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-[3em]">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          PROMOTIONS <span className="text-gray-500">(optional)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            label="Promotion Price"
            placeholder="₦"
            classNames={{
              input:
                "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg",
              label: "text-gray-800 font-medium",
              wrapper: "w-full",
            }}
            styles={{
              input: { fontSize: "18px", height: "56px" },
            }}
          />

          <div className="relative w-full">
            <TextInput
              label="Price Effective Date"
              placeholder="Enter start and end date"
              classNames={{
                input:
                  "h-14 text-gray-700 border-gray-300 rounded-md shadow-sm px-4 text-lg pr-10",
                label: "text-gray-800 font-medium",
                wrapper: "w-full",
              }}
              styles={{
                input: { fontSize: "18px", height: "56px" },
              }}
            />
            <CalendarIcon
              className="absolute right-4 top-10 text-gray-500"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
