import { Button, Modal, Text } from "@mantine/core";

interface ResolveProps {
  opened: boolean;
  onClose: () => void;
}

const Resolve = ({ opened, onClose }: ResolveProps) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title={
          <div>
            <Text size="1.8rem" c="black" fw={700}>
              Complaints Resolved
            </Text>
            <Text mt="5">Are you sure you want to resolve this complaints</Text>
          </div>
        }
        centered
        size="lg"
        radius={20}
        padding="xl"
      >
        <div className="space-y-4 grid grid-cols-1"></div>
        <div className="flex mt-7 gap-4">
          <Button
            variant="outline"
            style={{
              color: "#475367",
              borderRadius: "0.4rem",
              height: "auto",
              padding: "0.9rem 1.5rem",
              fontWeight: 600,
              fontSize: "16px",
              width: "100%",
              border: "1px solid #475367",
            }}
          >
            No
          </Button>
          <Button
            variant="filled"
            style={{
              backgroundColor: "#099137",
              color: "white",
              borderRadius: "0.4rem",
              height: "auto",
              padding: "0.9rem 1.5rem",
              fontWeight: 600,
              fontSize: "16px",
              width: "100%",
            }}
          >
            Yes, Resolve
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Resolve;
