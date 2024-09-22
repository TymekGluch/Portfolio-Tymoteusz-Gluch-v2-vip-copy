import React from "react";
import { COLOR_VARIANT, TEXT_COLORS_CLASSES } from "../../constants";
import { ValueOf } from "../../types/utiles";
import { Link, LinkProps } from "react-router-dom";
import { LINK_VARIANT, PSEUDO_CLASS_VARIANT } from "./Link.constants";
import {
  AFTER_COLORS_CLASSES,
  BEFORE_COLORS_CLASSES,
} from "../../constants/colorsClasses/pseudoClassesColors.constants";
import { twMerge } from "tailwind-merge";

type LinkCustomSharedProps = React.PropsWithChildren<{
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  uppercase?: boolean;
  variant?: ValueOf<typeof LINK_VARIANT>;
  tonnedDown?: boolean;
}>;

type LinkAsButtonType = Omit<React.ComponentProps<"button">, "className">;
type LinkAsAnchorType = Omit<React.ComponentProps<"a">, "className">;
type LinkAsReactRouterLink = Omit<LinkProps, "className">;

const textClass = (color: ValueOf<typeof COLOR_VARIANT>) =>
  TEXT_COLORS_CLASSES?.[color];
const bgAfterColorClass = (color: ValueOf<typeof COLOR_VARIANT>) =>
  AFTER_COLORS_CLASSES?.[color];
const bgBeforeColorClass = (color: ValueOf<typeof COLOR_VARIANT>) =>
  BEFORE_COLORS_CLASSES?.[color];
const pseudoClassVariantClass = (variant: ValueOf<typeof LINK_VARIANT>) =>
  PSEUDO_CLASS_VARIANT?.[variant];

const linkInternalClass = `relative flex justify-center items-center whitespace-nowrap gap-2 w-fit min-h-8`;
const focusBgColorClass = `bg-opacity-0 focus:bg-opacity-10 px-2 pr-4 rounded bg-textColor-primary`;

const linkCombinedClass = (
  color: ValueOf<typeof COLOR_VARIANT>,
  uppercase: boolean,
  variant: ValueOf<typeof LINK_VARIANT>,
  tonnedDown: boolean
) =>
  twMerge(
    textClass(color),
    bgBeforeColorClass(color),
    bgAfterColorClass(color),
    pseudoClassVariantClass(variant),
    linkInternalClass,
    focusBgColorClass,
    uppercase && "uppercase",
    tonnedDown && "opacity-50"
  );

const Button = (props: LinkAsButtonType & LinkCustomSharedProps) => {
  const {
    children,
    startIcon,
    endIcon,
    colorVariant = COLOR_VARIANT.DEFAULT,
    variant = LINK_VARIANT.DEFAULT,
    uppercase = false,
    tonnedDown = false,
    ...restProps
  } = props;
  return (
    <button
      className={linkCombinedClass(
        colorVariant,
        uppercase,
        variant,
        tonnedDown
      )}
      {...restProps}>
      {startIcon && startIcon}

      {children}

      {endIcon && endIcon}
    </button>
  );
};

const Anchor = (props: LinkAsAnchorType & LinkCustomSharedProps) => {
  const {
    children,
    startIcon,
    endIcon,
    colorVariant = COLOR_VARIANT.DEFAULT,
    variant = LINK_VARIANT.DEFAULT,
    uppercase = false,
    tonnedDown = false,
    ...restProps
  } = props;

  return (
    <a
      className={linkCombinedClass(
        colorVariant,
        uppercase,
        variant,
        tonnedDown
      )}
      {...restProps}>
      {startIcon && startIcon}

      {children}

      {endIcon && endIcon}
    </a>
  );
};

const RouterLink = (props: LinkAsReactRouterLink & LinkCustomSharedProps) => {
  const {
    children,
    startIcon,
    endIcon,
    colorVariant = COLOR_VARIANT.DEFAULT,
    variant = LINK_VARIANT.DEFAULT,
    uppercase = false,
    tonnedDown = false,
    ...restProps
  } = props;

  return (
    <Link
      className={linkCombinedClass(
        colorVariant,
        uppercase,
        variant,
        tonnedDown
      )}
      {...restProps}>
      {startIcon && startIcon}

      {children}

      {endIcon && endIcon}
    </Link>
  );
};

export { Button, Anchor, RouterLink };
