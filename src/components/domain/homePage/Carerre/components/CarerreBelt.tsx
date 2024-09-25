import { twMerge } from "tailwind-merge";
import { BG_COLORS_CLASSES, COLOR_VARIANT } from "../../../../../constants";
import { ValueOf } from "../../../../../types/utiles";
import { CARERRE_TIMELINE_VARIANT } from "../CarerreTimeline.constants";

type CarerreBeltProps = {
  colorVariant: ValueOf<typeof COLOR_VARIANT>;
  variant: ValueOf<typeof CARERRE_TIMELINE_VARIANT>;
  startDate?: string;
  finishDate: string | null;
  isMobile: boolean;
};

const CarerreBelt = ({
  colorVariant,
  variant,
  startDate,
  finishDate,
  isMobile,
}: CarerreBeltProps) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-1 lg:w-full lg:h-full">
      <div className="relative lg:flex items-center lg:gap-3 lg:w-full">
        <div
          className={twMerge(
            "block w-3 lg:w-4 h-3 lg:h-4",
            BG_COLORS_CLASSES?.[colorVariant],
            variant === CARERRE_TIMELINE_VARIANT.CIRCLE && "rounded-full"
          )}
        />

        {!isMobile && (
          <p className="absolute left-8 opacity-85 w-min">
            {finishDate ?? "Now"}
          </p>
        )}
      </div>

      <div
        className={twMerge(
          "block w-[0.125rem] lg:w-1 h-6 bg-inherit flex-grow",
          BG_COLORS_CLASSES?.[colorVariant],
          variant === CARERRE_TIMELINE_VARIANT.CIRCLE && "lg:mx-[0.375rem]"
        )}
      />

      <div className="relative lg:flex items-center lg:gap-3 lg:w-full">
        <div
          className={twMerge(
            'className="block w-3 lg:w-4 h-3 lg:h-4',
            BG_COLORS_CLASSES?.[colorVariant],
            variant === CARERRE_TIMELINE_VARIANT.CIRCLE && "rounded-full"
          )}
        />

        {!isMobile && (
          <p className="absolute left-8 opacity-85 w-min">{startDate}</p>
        )}
      </div>
    </div>
  );
};

export { CarerreBelt };
