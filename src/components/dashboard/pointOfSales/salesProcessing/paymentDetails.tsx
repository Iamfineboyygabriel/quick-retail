import { Divider, Text } from "@mantine/core";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { paymentData } from "../../../../utils/mockData";

const PaymentDetails = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <main className="w-full h-auto rounded-lg bg-white">
      <header className="px-6 py-2 cursor-pointer" onClick={toggleExpand}>
        <div className="flex items-center justify-between">
          <Text size="lg" fw={500} c="textSecondary.9" tt={"uppercase"}>
            Payment Details
          </Text>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </header>
      {isExpanded && (
        <>
          <Divider size="sm" className="mt-3" color="#E4E7EC" />
          <div className="pt-8 pb-6 max-w-md px-6">
            <div className="flex flex-col gap-2.5">
              {paymentData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <Text fw={500}>{item.label}</Text>
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
        </>
      )}
    </main>
  );
};

export default PaymentDetails;
