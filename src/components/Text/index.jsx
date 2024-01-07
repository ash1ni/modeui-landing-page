import React from "react";

const sizeClasses = {
  txtManropeMedium3246: "font-manrope font-medium",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium1298Bluegray600: "font-inter font-medium",
  txtManropeSemiBold62: "font-manrope font-semibold",
  txtManropeSemiBold40: "font-manrope font-semibold",
  txtManropeMedium32: "font-manrope font-medium",
  txtInterMedium16Purple900: "font-inter font-medium",
  txtInterMedium14Bluegray600: "font-inter font-medium",
  txtInterMedium1298: "font-inter font-medium",
  txtManropeSemiBold48: "font-manrope font-semibold",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterMedium16Bluegray600: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
  txtManropeSemiBold1948: "font-manrope font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
