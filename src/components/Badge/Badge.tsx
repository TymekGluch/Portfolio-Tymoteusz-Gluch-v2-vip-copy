import type React from "react";
import type { COLOR_VARIANT } from "../../constants";
import type { ValueOf } from "../../types/utiles";
import type { ALLOWED_BADGE_COMPONENT } from "./Badge.constants";

type BadgeProps = React.PropsWithChildren<{
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  component: ValueOf<typeof ALLOWED_BADGE_COMPONENT>;
}>;

const Badge = ({ colorVariant, component, children }: BadgeProps) => {
  const BadgeComponent = component;

  return <BadgeComponent>{children}</BadgeComponent>;
};

export { Badge };
