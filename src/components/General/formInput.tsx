import { TextInput } from "@mantine/core";
import { iInputField } from "./formTypes";

interface FlexibleInputField
  extends Omit<iInputField, "paddingX" | "paddingY" | "borderWidth"> {
  paddingX?: number | string;
  paddingY?: number | string;
  borderWidth?: number | string;
  leftPrefix?: string;
}

const FormInput = ({
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  leftIcon,
  rightIcon,
  leftIconClick,
  rightIconClick,
  required,
  optional,
  name,
  readOnly,
  bgColor = "white",
  borderWidth = "1px",
  color,
  inputRef,
  fontSize = "16px",
  paddingX = 16,
  paddingY = "12px", // Increased from 5px
  className,
  id,
  leftPrefix,
  requiredColor = "text-red-600",
  ...rest
}: FlexibleInputField) => {
  const normalizeDimension = (dimension: number | string | undefined) => {
    if (dimension === undefined) return "0.75rem"; // Increased default
    if (typeof dimension === "number") return `${dimension}px`;
    return dimension;
  };

  const paddingXValue = normalizeDimension(paddingX);
  const paddingYValue = normalizeDimension(paddingY);
  const borderWidthValue = normalizeDimension(borderWidth);

  return (
    <TextInput
      id={id}
      ref={inputRef}
      type={type}
      label={
        label && (
          <div className="flex items-center mb-2">
            {" "}
            {/* Added margin bottom */}
            {label}
            {required && <span className={`pl-1 ${requiredColor}`}>*</span>}
            {optional && <span className="text-gray-500 pl-1">(Optional)</span>}
          </div>
        )
      }
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      name={name}
      readOnly={readOnly}
      error={error}
      leftSection={
        leftIcon ? (
          <div onClick={leftIconClick} className="cursor-pointer">
            {leftIcon}
          </div>
        ) : leftPrefix ? (
          <div
            className="text-gray-700 text-sm pl-1 pr-3 pt-5 pb-4 ml-3 rounded-l-md border-r border-gray-200"
            style={{ backgroundColor: "#F9FAFB" }}
          >
            {leftPrefix}
          </div>
        ) : undefined
      }
      rightSection={
        rightIcon && (
          <div onClick={rightIconClick} className="cursor-pointer">
            {rightIcon}
          </div>
        )
      }
      styles={{
        wrapper: {
          width: "100%",
          marginBottom: "1rem", // Add spacing between inputs
        },
        label: {
          fontSize: "14px",
          fontWeight: 500,
          color: "#374151",
          marginBottom: "8px",
        },
        input: {
          backgroundColor: bgColor,
          color: error ? "#D42620" : color || "#374151",
          borderWidth: borderWidthValue,
          borderColor: error ? "#D42620" : "#D1D5DB",
          borderStyle: "solid",
          borderRadius: "0.5rem", // Slightly more rounded
          paddingLeft: leftIcon ? "2.5rem" : paddingXValue,
          paddingRight: rightIcon ? "2.5rem" : paddingXValue,
          paddingTop: paddingYValue,
          paddingBottom: paddingYValue,
          height: "48px", // Fixed height for consistency
          minHeight: "48px", // Minimum height
          fontSize: fontSize,
          lineHeight: "1.5",
          boxShadow: "none",
          outline: "none",
          transition:
            "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
          "&:focus": {
            borderColor: "#3B82F6",
            boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
          },
          "&::placeholder": {
            color: "#9CA3AF",
            opacity: 1,
          },
        },
      }}
      className={className}
      {...rest}
    />
  );
};

export default FormInput;
