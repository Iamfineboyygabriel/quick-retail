import { Divider, Text } from "@mantine/core";
import FormSelect from "../../../../General/select";
import FormInput from "../../../../General/formInput";
import { paymentData } from "../../../../../utils/mockData";
import { CircleHelp } from "lucide-react";

const PaymentDetails = () => {
  return (
    <main className="w-full h-auto rounded-lg bg-white">
      <header className="px-6 py-2 cursor-pointer">
        <div className="flex items-center justify-between">
          <Text size="lg" fw={500} c="textSecondary.9" tt={"uppercase"}>
            Payment Details
          </Text>
        </div>
      </header>
      <>
        <Divider size="sm" className="mt-3" color="#E4E7EC" />
        <section className="flex pt-8 pb-6 items-center gap-8 px-3.5">
          <div className="flex-1">
            <FormSelect
              label="Payment Method"
              options={["Quick Retail"]}
              placeholder="Select Payment Method"
              className="rounded-none w-full text-gray_4"
              labelGap="gap-[5em]"
              color="#000000"
              paddingY="3"
              fontSize="sm font-normal"
            />
          </div>
          <div className="flex-1">
            <FormInput
              type="text"
              label="Payment Refrence Number"
              optional
              placeholder="Enter Payment Refrence Number"
              className="w-full"
              paddingY="3"
            />
          </div>
        </section>
        <Divider size="sm" className="mt-3" color="#E4E7EC" />
        <section>
          <div className="pt-8 pb-6 max-w-md px-6">
            <div className="flex flex-col gap-2.5">
              {paymentData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Text fw={500}>
                      {item.label}
                      {item.label === "Service fee" && (
                        <CircleHelp
                          size={16}
                          className="inline-block ml-2 text-[#2E90FA]"
                        />
                      )}
                    </Text>
                  </div>
                  <Text fw={500}>{item.amount}</Text>
                </div>
              ))}
              <div className="flex items-center justify-between">
                <Text c="black" fw={700}>
                  Total
                </Text>
                <Text c="black" fw={700}>
                  ₦ 33,250
                </Text>
              </div>
            </div>
          </div>
        </section>
      </>
    </main>
  );
};

export default PaymentDetails;
