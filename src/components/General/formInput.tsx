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
  bgColor,
  borderColor,
  borderWidth,
  color,
  inputRef,
  fontSize,
  paddingX,
  paddingY,
  className,
  id,
  requiredColor = "text-[#D42620]",
  ...rest
}: iInputField) => {
  return (
    <div>
      {label && (
        <label
          style={{ color: (error && "#D42620") || color }}
          className={`mb-2 block text-[${fontSize}]`}
        >
          {label}
          {required && <span className={`pl-1 ${requiredColor}`}>*</span>}
          {optional && <span className="text-[#787486] pl-1">(Optional)</span>}
        </label>
      )}

      <div className="relative flex-1">
        {/* Left Icon */}
        {leftIcon && (
          <span
            onClick={leftIconClick}
            className="absolute left-0 px-3 bottom-0 flex items-center justify-center h-full cursor-pointer"
          >
            {leftIcon}
          </span>
        )}

        <input
          id={id}
          type={type}
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          name={name}
          readOnly={readOnly}
          className={`${className} bg-inherit border-[#D0D5DD] block px-${
            paddingX ? paddingX : "4"
          } py-${paddingY ? paddingY : "2"}
          rounded-md w-full border-[1px] ${
            error
              ? "border-[#D42620]"
              : value
              ? "border-[#FFD68F]"
              : "dark:border-borderDark border-borderLight"
          } ${leftIcon ? "pl-12" : ""} ${rightIcon ? "pr-12" : ""} 
          dark:placeholder:text-gray_3 placeholder:text-gray_4 ${
            readOnly
              ? "dark:bg-darkBg bg-lightBg"
              : bgColor
              ? `bg-[${bgColor}]`
              : "bg-[#F9FAFB]"
          } text-base`}
          style={{
            borderWidth,
            borderColor,
            color: (error && "#D42620") || color,
          }}
          {...rest}
        />

        {rightIcon && (
          <span
            onClick={rightIconClick}
            className="absolute right-0 px-3 bottom-0 flex items-center justify-center h-full cursor-pointer"
          >
            {rightIcon}
          </span>
        )}
      </div>
      {error && (
        <div className="mt-1" style={{ color: "#D42620" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;
