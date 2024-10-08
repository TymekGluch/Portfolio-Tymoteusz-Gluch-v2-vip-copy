import { twMerge } from "tailwind-merge";
import {
  CARERRE_TIMELINE_VARIANT,
  opacityArray,
} from "../CarerreTimeline.constants";
import {
  BG_COLORS_CLASSES,
  type COLOR_VARIANT,
} from "../../../../../constants";
import type { ValueOf } from "../../../../../types/utiles";
import { v4 as uuid } from "uuid";

type CarerreSeparatorProps = {
  isMobile: boolean;
  variant: ValueOf<typeof CARERRE_TIMELINE_VARIANT>;
  colorVariant: ValueOf<typeof COLOR_VARIANT>;
};

export const CarerreSeparator = ({
  isMobile,
  variant,
  colorVariant,
}: CarerreSeparatorProps) => {
  return (
    <li
      className={twMerge(
        "flex justify-center items-center gap-3 w-full xl:gap-5",
        !isMobile && "my-4"
      )}>
      {Array.from({ length: isMobile ? 11 : 22 }).map((_, index) => {
        const resolvedIndex = !isMobile ? Math.floor(index / 2) : index;
        const resolvedOpacityClass = opacityArray[resolvedIndex];

        return (
          <div
            key={uuid()}
            className={twMerge(
              "block w-2 h-2",
              BG_COLORS_CLASSES[colorVariant],
              resolvedOpacityClass,
              variant === CARERRE_TIMELINE_VARIANT.CIRCLE && "rounded-full"
            )}
          />
        );
      })}
    </li>
  );
};
