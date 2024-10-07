import type React from "react";
import {
  BG_COLORS_CLASSES,
  COLOR_VARIANT,
  TEXT_COLORS_CLASSES,
} from "../../constants";
import type { ValueOf } from "../../types/utiles";
import { ALLOWED_BADGE_COMPONENT } from "./Badge.constants";
import { twMerge } from "tailwind-merge";

type BadgeProps = React.PropsWithChildren<{
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  as?: ValueOf<typeof ALLOWED_BADGE_COMPONENT>;
  isSquareShape?: boolean;
  forceDefaultBG?: boolean;
}>;

const Badge = ({
  colorVariant = COLOR_VARIANT.DEFAULT,
  as = ALLOWED_BADGE_COMPONENT.SPAN,
  children,
  isSquareShape = false,
  forceDefaultBG = false,
}: BadgeProps) => {
  const BadgeComponent = as;

  return (
    <BadgeComponent
      className={twMerge(
        BG_COLORS_CLASSES?.[colorVariant],
        TEXT_COLORS_CLASSES?.[colorVariant],
        "flex bg-opacity-10 border-solid px-2 py-1 text-[0.750rem] font-bold whitespace-nowrap w-fit h-fit",
        !isSquareShape && "rounded-3xl",
        forceDefaultBG && BG_COLORS_CLASSES.DEFAULT
      )}>
      {children}
    </BadgeComponent>
  );
};

export { Badge };
