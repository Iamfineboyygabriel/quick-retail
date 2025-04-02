import { Checkbox, Switch } from "@mantine/core";
import { Upload, UploadCloud, X } from "lucide-react";
import FormInput from "../../components/General/formInput";
import FormSelect from "../../components/General/select";
import { useState } from "react";

const AddProductForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200">
          BASIC INFORMATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            type="text"
            label="Product Name"
            placeholder="Enter product name"
            paddingY={"0.7rem"}
          />

          <FormInput
            type="text"
            label={
              <span>
                Barcode –{" "}
                <a href="#" className="text-blue-500">
                  Scan barcode
                </a>
              </span>
            }
            placeholder="Enter barcode"
            paddingY={"0.7rem"}
          />

          <FormInput
            type="text"
            label="SKU (Store Keeping Unit)"
            placeholder="Enter SKU"
            paddingY={"0.7rem"}
          />

          <FormSelect
            label="Category"
            placeholder="Select product category"
            options={["Category 1", "Category 2", "Category 3"]}
            name="category"
            paddingY="4"
            // onSelect={(e) => console.log("Selected:", e.target.value)}
          />

          <FormSelect
            label="Sub-category"
            placeholder="Select sub-category"
            options={["Sub-category 1", "Sub-category 2"]}
            name="sub-category"
            paddingY="4"
            // onSelect={(e) => console.log("Selected:", e.target.value)}
          />

          <FormSelect
            label="Supplier"
            placeholder="Enter supplier"
            options={["Supplier 1", "Supplier 2"]}
            name="supplier"
            paddingY="4"
            // onSelect={(e) => console.log("Selected:", e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-[3em]">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200">
          PRICING INFORMATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FormInput
              type="number"
              label="Cost Price"
              placeholder="₦"
              paddingY={"0.7rem"}
            />
            <Checkbox
              label="Apply to Variations"
              className="mt-2 text-gray-600"
            />
          </div>

          <div>
            <FormInput
              type="number"
              label="Selling Price"
              placeholder="₦"
              paddingY={"0.7rem"}
            />
            <Checkbox
              label="Apply to Variations"
              className="mt-2 text-gray-600"
            />
          </div>

          <FormSelect
            label="Tax %"
            placeholder="Select tax percentage"
            options={["0%", "5%", "10%", "15%"]}
            name="text"
            paddingY="4"
            // onSelect={(e) => console.log("Selected:", e.target.value)}
          />

          {/* Discount */}
          <FormInput
            type="number"
            label=" Discount"
            paddingY={"0.7rem"}
            optional
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
          <FormInput
            type="number"
            label="Promotion Price"
            paddingY={"0.7rem"}
            placeholder="₦"
          />

          <div className="relative w-full">
            <FormInput
              type="date"
              label="Price Effective Date"
              paddingY={"0.7rem"}
              placeholder="₦"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-[3em]">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          ADDITIONAL INFORMATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Short Description */}
          <FormInput
            type="text"
            label="Short Description"
            paddingY={"0.7rem"}
            placeholder="Enter short product description"
          />

          {/* Long Description */}
          <FormInput
            type="text"
            label="Long Description"
            paddingY={"0.7rem"}
            placeholder="Enter detailed product description"
            optional
          />

          {/* Tags */}
          <FormInput
            type="text"
            label="Tags"
            paddingY={"0.7rem"}
            placeholder="Enter short product description"
          />

          {/* Notes */}
          <FormInput
            type="text"
            label="Notes"
            paddingY={"0.7rem"}
            placeholder="Enter random notes on product, supplier or inventory"
            optional
          />
        </div>

        {/* Product Images Upload Section */}
        <div className="mt-6">
          <h3 className="text-gray-800 font-medium mb-2">Product Images</h3>

          <div className="flex items-center gap-6">
            {/* Upload Box */}
            <div className="w-48 h-48 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center rounded-md cursor-pointer hover:border-blue-500 transition">
              <UploadCloud className="text-gray-400" size={32} />
              <p className="text-orange-500 text-sm font-medium mt-2">
                Click to upload
              </p>
              <p className="text-gray-500 text-xs">or drag and drop</p>
              <p className="text-gray-400 text-xs mt-1">PNG, JPEG (max 5 MB)</p>
            </div>

            {/* Add More Photos */}
            <button className="text-orange-500 flex items-center gap-2 font-medium text-sm">
              + Add more photos
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-[3em] mb-5 ">
        {/* Section Title */}
        <h3 className="text-lg font-semibold text-gray-800">
          COMPLIANCE INFORMATION{" "}
          <span className="text-gray-500">(optional)</span>
        </h3>

        {/* Safety Instructions Input */}
        <div className="mt-4 w-[700px]">
          <FormInput
            type="text"
            label="Safety Instructions"
            paddingY={"0.7rem"}
            placeholder="Enter safety instructions"
          />
        </div>

        {/* Compliance Certificates Upload */}
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">
            Compliance Certificates
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 w-[250px] h-[150px] flex flex-col items-center justify-center text-center">
            {selectedFile ? (
              <div className="flex flex-col items-center">
                <p className="text-gray-700 text-sm">{selectedFile.name}</p>
                <button
                  onClick={removeFile}
                  className="text-red-500 mt-2 flex items-center"
                >
                  <X size={16} className="mr-1" /> Remove
                </button>
              </div>
            ) : (
              <>
                <Upload size={24} className="text-gray-500 mb-2" />
                <p className="text-sm text-gray-500">
                  <span className="text-orange-600 font-medium cursor-pointer">
                    Click to upload
                  </span>{" "}
                  or drag and drop <br />
                  <span className="text-gray-700 font-medium">
                    PDF, DOC
                  </span>{" "}
                  (max 5 MB)
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-orange-600 font-medium">
                    Click to upload
                  </span>
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
