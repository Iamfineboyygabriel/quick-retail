import { Button, Modal, Switch, Text } from "@mantine/core";
import FormInput from "../../../../General/formInput";
import { useState } from "react";
import storeIcon from "../../../../../assets/images/newStore.png";
interface AddNewStoreModalProps {
  opened: boolean;
  onClose: () => void;
}

const AddNewStore = ({ opened, onClose }: AddNewStoreModalProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title={
          <div>
            <img src={storeIcon} alt="store-icon" className="mb-2" />
            <Text size="1.5rem" c="black" fw={700}>
              Add New Store
            </Text>
            <Text mt="5">Input store information below.</Text>
          </div>
        }
        centered
        size="lg"
        radius={10}
        padding="xl"
      >
        <div className="flex flex-col space-y-6">
          <div className="col-span-2">
            <FormInput type="text" label="Store Name" paddingY="6px" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormInput type="number" label="GLA" paddingY="6px" />

            <FormInput type="number" label="GSA" paddingY="6px" />
            <FormInput type="text" label="Store ID" paddingY="6px" />
            <FormInput type="text" label="Country" paddingY="6px" />

            <div className="col-span-2">
              <FormInput type="text" label="Address" paddingY="6px" />
            </div>
            <div className="flex flex-col">
              <Text>Status</Text>
              <Switch
                checked={isEnabled}
                onChange={(event) => setIsEnabled(event.target.checked)}
                className={`${
                  isEnabled ? "text-[#12B76A] bg-[#E16635]" : "text-gray-300"
                } relative inline-flex h-6 w-12 items-center rounded-full transition`}
                size="md"
                label="Active"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button
              variant="outline-primary"
              style={{
                border: "1px solid #D0D5DD",
                color: "#344054",
              }}
            >
              Cancel
            </Button>
            <Button variant="filled-primary">Submit</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddNewStore;
