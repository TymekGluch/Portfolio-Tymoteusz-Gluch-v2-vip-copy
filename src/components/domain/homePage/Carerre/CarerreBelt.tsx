import { twMerge } from "tailwind-merge";
import { BG_COLORS_CLASSES, COLOR_VARIANT } from "../../../../constants";
import { ValueOf } from "../../../../types/utiles";
import { CARERRE_TIMELINE_VARIANT } from "./CarerreTimeline.constants";

type CarerreBeltProps = {
  colorVariant: ValueOf<typeof COLOR_VARIANT>;
  variant: ValueOf<typeof CARERRE_TIMELINE_VARIANT>;
};

const CarerreBelt = ({ colorVariant, variant }: CarerreBeltProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div
        className={twMerge(
          'className="block w-3 h-3',
          BG_COLORS_CLASSES?.[colorVariant],
          variant === CARERRE_TIMELINE_VARIANT.CIRCLE && "rounded-full"
        )}
      />
      <div
        className={twMerge(
          "block w-[0.125rem] h-6 bg-inherit",
          BG_COLORS_CLASSES?.[colorVariant]
        )}
      />
      <div
        className={twMerge(
          'className="block w-3 h-3',
          BG_COLORS_CLASSES?.[colorVariant],
          variant === CARERRE_TIMELINE_VARIANT.CIRCLE && "rounded-full"
        )}
      />
    </div>
  );
};

export { CarerreBelt };
