import { Group, Text } from "@mantine/core";
import DateFilterMenu from "../filterMenu";
import AnalyticsCard from "../card";
import { analyticsData } from "../../../utils/mockData";

const OverviewBox = () => {
  return (
    <main className="w-full h-auto overflow-auto px-4 py-6 rounded-lg bg-white">
      <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <Text size="lg" fw={600} c="textSecondary.9">
            Analysis overview
          </Text>
          <Text size="sm">An overview sales made</Text>
        </div>
        <Group>
          <DateFilterMenu
            defaultFilter="This Month"
            buttonVariant="subtle"
            buttonSize="md"
          />
        </Group>
      </header>
      <section className="flex overflow-auto gap-2 mt-2.5">
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
