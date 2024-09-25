import { COLOR_VARIANT } from "../../../../../constants";
import { ValueOf } from "../../../../../types/utiles";
import { CARERRE_TIMELINE_VARIANT } from "../CarerreTimeline.constants";
import { CarerreBelt } from "./CarerreBelt";

type CarerreItemTimelineProps = {
  startDate: string;
  finishDate: string | null;
  isMobile: boolean;
  colorVariant: ValueOf<typeof COLOR_VARIANT>;
  variant: ValueOf<typeof CARERRE_TIMELINE_VARIANT>;
};

const CarerreItemTimeline = ({
  startDate,
  finishDate,
  isMobile,
  colorVariant,
  variant,
}: CarerreItemTimelineProps) => {
  return (
    <div className="flex lg:w-full h-full col-span-2">
      <div className="flex flex-col justify-center items-center lg:items-start gap-1 lg:w-full">
        {isMobile && (
          <>
            <p className="opacity-85">
              {finishDate ? `to ${finishDate}` : "Now"}
            </p>
          </>
        )}

        <CarerreBelt
          colorVariant={colorVariant}
          variant={variant}
          startDate={startDate}
          finishDate={finishDate}
          isMobile={isMobile}
        />

        {isMobile && <p className="opacity-85">from {startDate}</p>}
      </div>
    </div>
  );
};

export { CarerreItemTimeline };
