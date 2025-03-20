import React, { ReactNode } from "react";

interface PageContainerProps {
  subHeaders?: ReactNode[];
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  subHeaders = [],
  children,
}) => {
  return (
    <>
      {subHeaders.map((header, index) => (
        <div
          key={index}
          className="w-full mt-0.5 mx-0.5 bg-white p-3 border-b border-gray-100"
        >
          {header}
        </div>
      ))}
      <div className="p-4 md:p-5">
        <div className="p-4 md:p-7 bg-[#F2F4F7] min-h-full rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
};

export default PageContainer;
