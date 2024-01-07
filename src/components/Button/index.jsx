import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-lg" };
const variants = {
  fill: {
    blue_gray_50: "bg-blue_gray-50",
    gray_200_01: "bg-gray-200_01 text-blue_gray-600",
    purple_900: "bg-purple-900",
    gray_100: "bg-gray-100",
  },
};
const sizes = { xs: "p-1", sm: "p-[7px]", md: "p-[11px]", lg: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_gray_50",
    "gray_200_01",
    "purple_900",
    "gray_100",
  ]),
};

export { Button };
