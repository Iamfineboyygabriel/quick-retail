// import React, { useState } from "react";
// import { Button, Text } from "@mantine/core";
// import { ChevronLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import PageContainer from "../../../layout/pageContainer";

// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ReturnsStep,
//   useReturns,
// } from "../../../components/General/orderContext/orderCreationContext";
// import ReturnedProduct from "../../../components/dashboard/pointOfSales/returnsRefunds/returnedProduct";
// import SendMail from "../../../components/dashboard/pointOfSales/returnsRefunds/sendMail";
// import Resolve from "../../../components/dashboard/pointOfSales/returnsRefunds/modals/resolve";
// import Decline from "../../../components/dashboard/pointOfSales/returnsRefunds/modals/decline";

// const slideVariants = {
//   initial: (direction: number) => ({
//     x: direction > 0 ? "100%" : "-100%",
//     opacity: 0,
//   }),
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: "tween",
//       duration: 0.3,
//     },
//   },
//   exit: (direction: number) => ({
//     x: direction > 0 ? "-100%" : "100%",
//     opacity: 0,
//     transition: {
//       type: "tween",
//       duration: 0.3,
//     },
//   }),
// };

// const ViewReturnsContent: React.FC = () => {
//   const navigate = useNavigate();
//   const { currentStep, prevStep } = useReturns();
//   const [isResolveOpen, setIsResolveOpen] = useState(false);
//   const [isDeclineOpen, setIsDeclineOpen] = useState(false);

//   const handleBack = () => {
//     if (currentStep === ReturnsStep.VIEW_RETURNS) {
//       navigate(-1);
//     } else {
//       prevStep();
//     }
//   };

//   const getSubHeaders = () => {
//     const backButton = (
//       <button
//         onClick={handleBack}
//         className="flex cursor-pointer gap-2 items-center"
//       >
//         <ChevronLeft />
//         <Text fw={500} c="black">
//           Back
//         </Text>
//       </button>
//     );

//     return [
//       <div key="1" className="py-2.5">
//         <div className="flex gap-8 items-center">
//           {backButton}
//           <div className="flex items-center">
//             <Text>Returns and Refund</Text>
//             {currentStep === ReturnsStep.VIEW_RETURNS && (
//               <>
//                 <span className="mx-2">/</span>
//                 <Text c="black" fw={500}>
//                   View Returns
//                 </Text>
//               </>
//             )}
//           </div>
//         </div>
//       </div>,
//       <div key="2">
//         <Text fw={500} size="xl" c="black">
//           {currentStep === ReturnsStep.SEND_MAIL ? (
//             "Send Mail"
//           ) : (
//             <>
//               <div className="flex justify-between items-center">
//                 <Text fw={400} size="xl" c="black">
//                   Returned Product
//                 </Text>
//                 <div className="flex gap-3.5 items-center">
//                   <Button
//                     variant="filled"
//                     style={{
//                       backgroundColor: "#099137",
//                       color: "#E7F6EC",
//                       borderRadius: "0.4rem",
//                       height: "auto",
//                       padding: "0.9rem 1.5rem",
//                       fontWeight: 600,
//                       fontSize: "16px",
//                     }}
//                   >
//                     Resolve
//                   </Button>

//                   <Button
//                     style={{
//                       backgroundColor: "#CB1A14",
//                       color: "#FBEAE9",
//                       borderRadius: "0.4rem",
//                       height: "auto",
//                       padding: "0.9rem 1.5rem",
//                       fontWeight: 600,
//                       fontSize: "16px",
//                     }}
//                   >
//                     Decline
//                   </Button>
//                 </div>
//               </div>
//             </>
//           )}
//         </Text>
//       </div>,
//     ];
//   };

//   //   const getBottomButtons = () => {
//   //     switch (currentStep) {
//   //       case ReturnsStep.VIEW_RETURNS:
//   //         return [
//   //           <div key="search-product-buttons" className="flex gap-4 justify-end">
//   //             <Button variant="outline-primary" onClick={() => navigate(-1)}>
//   //               Cancel
//   //             </Button>
//   //             <Button variant="filled-primary" onClick={nextStep}>
//   //               Confirm Order
//   //             </Button>
//   //           </div>,
//   //         ];
//   //       case ReturnsStep.SEND_MAIL:
//   //         return [
//   //           <div key="confirm-payment-buttons" className="flex gap-4 justify-end">
//   //             <Button variant="outline-primary" onClick={prevStep}>
//   //               Save to Draft
//   //             </Button>
//   //             <Button variant="filled-primary" onClick={nextStep}>
//   //               Confirm Payment
//   //             </Button>
//   //           </div>,
//   //         ];
//   //       default:
//   //         return [];
//   //     }
//   //   };

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case ReturnsStep.VIEW_RETURNS:
//         return (
//           <motion.div
//             key={ReturnsStep.VIEW_RETURNS}
//             custom={-1}
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="flex flex-col gap-4"
//           >
//             <ReturnedProduct />
//           </motion.div>
//         );
//       case ReturnsStep.SEND_MAIL:
//         return (
//           <motion.div
//             key={ReturnsStep.SEND_MAIL}
//             custom={currentStep > ReturnsStep.SEND_MAIL ? 1 : -1}
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <SendMail />
//           </motion.div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <PageContainer
//       subHeaders={getSubHeaders()}
//       //   subHeaderButtom={getBottomButtons()}
//     >
//       <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>
//       <Resolve opened={isResolveOpen} onClose={() => setIsResolveOpen(false)} />
//       <Decline opened={isDeclineOpen} onClose={() => setIsDeclineOpen(false)} />
//     </PageContainer>
//   );
// };

// export default ViewReturnsContent;

import React, { useState } from "react";
import { Button, Text } from "@mantine/core";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageContainer from "../../../layout/pageContainer";

import { motion, AnimatePresence } from "framer-motion";
import {
  ReturnsStep,
  useReturns,
} from "../../../components/General/orderContext/orderCreationContext";
import ReturnedProduct from "../../../components/dashboard/pointOfSales/returnsRefunds/returnedProduct";
import SendMail from "../../../components/dashboard/pointOfSales/returnsRefunds/sendMail";
import Resolve from "../../../components/dashboard/pointOfSales/returnsRefunds/modals/resolve";
import Decline from "../../../components/dashboard/pointOfSales/returnsRefunds/modals/decline";

const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  }),
};

const ViewReturnsContent: React.FC = () => {
  const navigate = useNavigate();
  const { currentStep, prevStep } = useReturns();
  const [isResolveOpen, setIsResolveOpen] = useState(false);
  const [isDeclineOpen, setIsDeclineOpen] = useState(false);

  const handleBack = () => {
    if (currentStep === ReturnsStep.VIEW_RETURNS) {
      navigate(-1);
    } else {
      prevStep();
    }
  };

  const getSubHeaders = () => {
    const backButton = (
      <button
        onClick={handleBack}
        className="flex cursor-pointer gap-2 items-center"
      >
        <ChevronLeft />
        <Text fw={500} c="black">
          Back
        </Text>
      </button>
    );

    return [
      <div key="1" className="py-2.5">
        <div className="flex gap-8 items-center">
          {backButton}
          <div className="flex items-center">
            <Text>Returns and Refund</Text>
            {currentStep === ReturnsStep.VIEW_RETURNS && (
              <>
                <span className="mx-2">/</span>
                <Text c="black" fw={500}>
                  View Returns
                </Text>
              </>
            )}
          </div>
        </div>
      </div>,
      <div key="2">
        <Text fw={500} size="xl" c="black">
          {currentStep === ReturnsStep.SEND_MAIL ? (
            "Send Mail"
          ) : (
            <>
              <div className="flex justify-between items-center">
                <Text fw={400} size="xl" c="black">
                  Returned Product
                </Text>
                <div className="flex gap-3.5 items-center">
                  <Button
                    variant="filled"
                    onClick={() => setIsResolveOpen(true)}
                    style={{
                      backgroundColor: "#099137",
                      color: "#E7F6EC",
                      borderRadius: "0.4rem",
                      height: "auto",
                      padding: "0.9rem 1.5rem",
                      fontWeight: 600,
                      fontSize: "16px",
                    }}
                  >
                    Resolve
                  </Button>

                  <Button
                    onClick={() => setIsDeclineOpen(true)}
                    style={{
                      backgroundColor: "#CB1A14",
                      color: "#FBEAE9",
                      borderRadius: "0.4rem",
                      height: "auto",
                      padding: "0.9rem 1.5rem",
                      fontWeight: 600,
                      fontSize: "16px",
                    }}
                  >
                    Decline
                  </Button>
                </div>
              </div>
            </>
          )}
        </Text>
      </div>,
    ];
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case ReturnsStep.VIEW_RETURNS:
        return (
          <motion.div
            key={ReturnsStep.VIEW_RETURNS}
            custom={-1}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-4"
          >
            <ReturnedProduct />
          </motion.div>
        );
      case ReturnsStep.SEND_MAIL:
        return (
          <motion.div
            key={ReturnsStep.SEND_MAIL}
            custom={currentStep > ReturnsStep.SEND_MAIL ? 1 : -1}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <SendMail />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <PageContainer subHeaders={getSubHeaders()}>
      <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

      <Resolve opened={isResolveOpen} onClose={() => setIsResolveOpen(false)} />
      <Decline opened={isDeclineOpen} onClose={() => setIsDeclineOpen(false)} />
    </PageContainer>
  );
};

export default ViewReturnsContent;
