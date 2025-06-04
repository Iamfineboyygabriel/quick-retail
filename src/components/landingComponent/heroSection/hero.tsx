import { Button } from "@mantine/core";
import { LayoutDashboard } from "lucide-react";
import hero from "../../../assets/images/hero.png";
import heroBg from "../../../assets/images/herobg.png";

export default function HeroSection() {
  const valuePropositions = [
    {
      icon: LayoutDashboard,
      title: "Core Value Proposition",
      description:
        "This is a content that would run for this value proposition to the target population and best fit. It should not be more than 5 lines.",
    },
    {
      icon: LayoutDashboard,
      title: "Another Key Feature",
      description:
        "Provide financial transparency and streamline accounting processes with our tailored ERP system.",
    },
    {
      icon: LayoutDashboard,
      title: "Real-Time Reporting",
      description:
        "Access accurate financial data in real-time to make informed decisions and improve business outcomes.",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-4 md:px-20 font-clash">
      {/* Hero background with rounded corners */}
      <div className="px-4 pt-8">
        <div
          className="rounded-2xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          <section className="px-6 pt-12 pb-6">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-[64px] leading-[77px] tracking-[-0.02em] text-gray-800 font-clash font-semibold mb-[60px]">
                Manage Account, Finance all in{" "}
                <br className="hidden md:block" />
                One place with a{" "}
                <span className="text-orange-500">Tailored ERP.</span>
              </h1>

              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Manage accounts payable/receivable, Generate financial
                statements, including balance sheets, general ledger, and
                banking transactions at ease.
              </p>

              <div className="mt-8">
                <Button
                  variant="filled-primary"
                  radius="xl"
                  size="md"
                  styles={{
                    root: {
                      fontFamily: '"Clash Display", sans-serif',
                      fontWeight: 600,
                    },
                  }}
                >
                  Request a Demo
                </Button>
              </div>

              <div className="mt-12 shadow-xl rounded-xl overflow-hidden">
                <img
                  src={hero}
                  alt="ERP Dashboard"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="mt-20 text-left">
        <h2 className="text-[48px]  font-normal text-gray-800 font-clash w-[60%]">
          Manage financial transactions and support{" "}
          <span className="text-orange-500">financial decision-making.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePropositions.map((item, i) => (
            <div
              key={i}
              className="p-6 flex items-start gap-4 text-left"
            >
              <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                <item.icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 font-clash">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
