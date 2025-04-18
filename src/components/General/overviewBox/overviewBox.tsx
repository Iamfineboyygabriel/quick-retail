import { Group, Text } from "@mantine/core";
import DateFilterMenu from "../filterMenu";
import AnalyticsCard from "../card";
import { analyticsData } from "../../../utils/mockData";
import { useEffect, useState } from "react";

const OverviewBox = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main className="w-full h-auto overflow-auto px-3 sm:px-6 py-4 sm:py-8 rounded-lg bg-white">
      <header className="flex flex-row justify-between sm:items-center">
        <div className="flex flex-col mb-3 sm:mb-0">
          <Text size="xl" fw={600}>
            Analysis overview
          </Text>

          {isMobile ? (
            <Text size="sm">An Overview of sales made</Text>
          ) : (
            <Text size="sm">
              This is an overview summarizing sales, highlighting key trends and
              strategies.
            </Text>
          )}
        </div>
        <Group className="mt-2 sm:mt-0">
          <DateFilterMenu
            defaultFilter="This Month"
            buttonVariant="subtle"
            buttonSize="md"
            showIconOnly="sm"
          />
        </Group>
      </header>
      <section className="flex flex-col sm:flex-row overflow-auto gap-6 md:gap-2 mt-5">
        {analyticsData.map((card, index) => (
          <AnalyticsCard
            key={index}
            title={card.title}
            value={card.value}
            icon={
              <div>
                <img src={card.icon} alt={card.altText} />
              </div>
            }
            iconColor={card.iconColor}
            textColor={card.textColor}
            cardBgColor={card.cardBgColor}
            percentageValue={card.percentageValue}
            borderColor={card.borderColor}
          />
        ))}
      </section>
    </main>
  );
};

export default OverviewBox;
