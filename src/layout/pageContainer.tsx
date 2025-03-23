import React, { ReactNode } from "react";

interface PageContainerProps {
  subHeaders?: ReactNode[];
  subHeaderButtom?: ReactNode[];
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  subHeaders = [],
  subHeaderButtom = [],
  children,
}) => {
  return (
    <div>
      {subHeaders.map((header, index) => (
        <div
          key={index}
          className="w-full mt-0.5 ml-0.5 bg-white px-6 py-3 border-b border-gray-100"
        >
          {header}
        </div>
      ))}
      <div className="p-4 md:p-6 flex flex-col gap-8 bg-[#F2F4F7] min-h-full rounded-lg">
        {children}
      </div>
      {subHeaderButtom.map((header, index) => (
        <div
          key={index}
          className="w-full mt-0.5 ml-0.5 sticky bg-white px-6 py-4 border-b border-gray-100"
        >
          {header}
        </div>
      ))}
    </div>
  );
};

export default PageContainer;
