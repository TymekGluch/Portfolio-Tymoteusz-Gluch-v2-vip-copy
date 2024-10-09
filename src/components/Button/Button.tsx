import type React from "react";
import {
  BG_COLORS_CLASSES,
  BORDER_COLORS_CLASSES,
  COLOR_VARIANT,
  TEXT_COLORS_CLASSES,
} from "../../constants";
import type { ValueOf } from "../../types/utiles";
import {
  BUTTON_SIZES,
  BUTTON_SIZES_ClASSES,
  BUTTON_VARIANTS,
} from "./Button.constants";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.PropsWithChildren<{
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  variant?: ValueOf<typeof BUTTON_VARIANTS>;
  size?: ValueOf<typeof BUTTON_SIZES>;
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
  uppercase?: boolean;
  disabled?: boolean;
  isFullWidth?: boolean;
  isHalfWidth?: boolean;
}> &
  Omit<React.HTMLAttributes<HTMLButtonElement>, "className">;

const Button = ({
  children,
  startIcon = null,
  endIcon = null,
  colorVariant = COLOR_VARIANT.DEFAULT,
  variant = BUTTON_VARIANTS.FILLED,
  size = BUTTON_SIZES.MEDIUM,
  isFullWidth = false,
  isHalfWidth = false,
  uppercase = false,
  className: customClassNames,
  disabled = false,
  ...restProps
}: ButtonProps) => {
  const resolvedVariantClasses =
    variant === BUTTON_VARIANTS.FILLED
      ? twMerge(BG_COLORS_CLASSES[colorVariant], "text-backgroundColor-primary")
      : twMerge(
          "text-backgroundColor-primary",
          TEXT_COLORS_CLASSES[colorVariant]
        );

  const resolvedIconWrapperClasses =
    variant === BUTTON_VARIANTS.FILLED
      ? twMerge("text-backgroundColor-primary w-5 h-5")
      : twMerge(TEXT_COLORS_CLASSES[colorVariant], "w-5 h-5");

  return (
    <button
      className={twMerge(
        "flex justify-center items-center gap-2 border-2 border-solid whitespace-nowrap rounded-xl font-extrabold transition-transform duration-200 ease-in-out hover:scale-x-110 focus:animate-pulse",
        disabled && "opacity-50 cursor-not-allowed",
        uppercase && "uppercase",
        BORDER_COLORS_CLASSES[colorVariant],
        resolvedVariantClasses,
        BUTTON_SIZES_ClASSES[size],
        isHalfWidth && "w-1/2",
        isFullWidth && "w-full",
        !isFullWidth && !isHalfWidth && "w-fit",
        customClassNames
      )}
      {...restProps}>
      {startIcon && (
        <div className={resolvedIconWrapperClasses}>{startIcon}</div>
      )}

      {children}

      {endIcon && <div className={resolvedIconWrapperClasses}>{endIcon}</div>}
    </button>
  );
};

export default Button;
