import React from "react";
import { COLOR_VARIANT } from "../../constants";
import { ValueOf } from "../../types/utiles";
import { Link, LinkProps } from "react-router-dom";

type LinkCustomSharedProps = React.PropsWithChildren<{
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  StartIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isFullWidth?: boolean;
}>;

type LinkAsButtonType = React.ComponentProps<"button">;
type LinkAsAnchorType = React.ComponentProps<"a">;
type LinkAsReactRouterLink = LinkProps;

const Button = (props: LinkAsButtonType & LinkCustomSharedProps) => {
  const { children, ...restProps } = props;

  return <button {...restProps}>{children}</button>;
};

const Anchor = (props: LinkAsAnchorType & LinkCustomSharedProps) => {
  const { children, ...restProps } = props;

  return <a {...restProps}>{children}</a>;
};

const RouterLink = (props: LinkAsReactRouterLink & LinkCustomSharedProps) => {
  const { children, ...restProps } = props;

  return <Link {...restProps}>{children}</Link>;
};

export { Button, Anchor, RouterLink };
