import { BG_COLORS_CLASSES, COLOR_VARIANT } from "../../../../constants";
import { ContentProgress } from "../../../Progress";
import { PROGRESS_STATUS } from "../../../Progress/Progress.constants";
import { useFetchCarerreData } from "./api/useFetchCarerreData.hook";
import { ValueOf } from "../../../../types/utiles";
import {
  CARERRE_HEADING_VARIANT,
  CARERRE_TIMELINE_VARIANT,
  opacityArray,
} from "./CarerreTimeline.constants";
import React from "react";
import {
  getResolvedYYYYMonthNameFormat,
  getTimeDifferenceFullFormated,
  getTimeDifferenceInMonth,
} from "./CarerreTimeline.utilities";
import { v4 as uuid } from "uuid";
import { twMerge } from "tailwind-merge";
import { useIsMobile } from "../../../../hooks";
import { CarerreItemHeader } from "./components/CarerreItemHeader";
import { CarerreItemTimeline } from "./components/CarerreItemTimeline";

type CarerreTimelineProps = {
  headingComponent?: ValueOf<typeof CARERRE_HEADING_VARIANT>;
  variant?: ValueOf<typeof CARERRE_TIMELINE_VARIANT>;
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  primaryColorVariant?: ValueOf<typeof COLOR_VARIANT>;
};

const CarerreTimeline = ({
  headingComponent = CARERRE_HEADING_VARIANT.H2,
  colorVariant = COLOR_VARIANT.DEFAULT,
  primaryColorVariant = COLOR_VARIANT.DEFAULT,
  variant = CARERRE_TIMELINE_VARIANT.CIRCLE,
}: CarerreTimelineProps) => {
  const { data, isLoading, isError } = useFetchCarerreData();
  const isMobile = useIsMobile();

  return (
    <ul className="flex flex-col justify-center items-center gap-4 w-full">
      {isError || isLoading ? (
        <div className="flex flex-col gap-4 w-1/2">
          {Array.from({ length: 6 }, () => (
            <li key={uuid()}>
              {isError ? (
                <ContentProgress
                  status={PROGRESS_STATUS.ERROR}
                  sizeClass="w-full h-8 rounded-full"
                />
              ) : (
                <ContentProgress
                  color={colorVariant}
                  status={PROGRESS_STATUS.LOADING}
                  sizeClass="w-full h-8 rounded-sm"
                />
              )}
            </li>
          ))}
        </div>
      ) : (
        <>
          {data
            ?.reverse()
            ?.map(
              (
                { title, description, image, startDate, finishDate },
                index,
                array
              ) => {
                const isLastElement = index === array.length - 1;

                const resolvedStartDate =
                  getResolvedYYYYMonthNameFormat(startDate);
                const resolvedFinishDate =
                  finishDate && getResolvedYYYYMonthNameFormat(finishDate);

                const currentDate = new Date().toISOString().split("T")[0];
                const differenceInMonth = getTimeDifferenceInMonth(
                  startDate,
                  finishDate ?? currentDate
                );

                const differenceInYearAndMonth =
                  getTimeDifferenceFullFormated(differenceInMonth);
                const periodSummary = `{ ${differenceInYearAndMonth} }`;

                return (
                  <React.Fragment key={title}>
                    <li className="w-full">
                      <section className="flex lg:grid lg:grid-cols-12 flex-col justify-center items-center gap-1 w-full h-fit">
                        {isMobile ? (
                          <>
                            <CarerreItemHeader
                              title={title}
                              description={description}
                              periodSummary={periodSummary}
                              imageSrc={image}
                              headingTag={headingComponent}
                              index={index}
                              primaryColorVarint={primaryColorVariant}
                            />

                            <CarerreItemTimeline
                              startDate={resolvedStartDate}
                              finishDate={resolvedFinishDate}
                              isMobile={isMobile}
                              colorVariant={colorVariant}
                              variant={variant}
                            />
                          </>
                        ) : (
                          <>
                            <CarerreItemTimeline
                              startDate={resolvedStartDate}
                              finishDate={resolvedFinishDate}
                              isMobile={isMobile}
                              colorVariant={colorVariant}
                              variant={variant}
                            />

                            <CarerreItemHeader
                              title={title}
                              description={description}
                              periodSummary={periodSummary}
                              imageSrc={image}
                              headingTag={headingComponent}
                              index={index}
                              primaryColorVarint={primaryColorVariant}
                            />
                          </>
                        )}
                      </section>
                    </li>

                    {!isLastElement && (
                      <li className="flex justify-center items-center gap-3 w-full">
                        {Array.from({ length: 11 }).map((_, index) => {
                          const resolvedOpacityClass = opacityArray[index];

                          return (
                            <div
                              key={uuid()}
                              className={twMerge(
                                "block w-2 h-2",
                                BG_COLORS_CLASSES?.[colorVariant],
                                resolvedOpacityClass,
                                variant === CARERRE_TIMELINE_VARIANT.CIRCLE &&
                                  "rounded-full"
                              )}
                            />
                          );
                        })}
                      </li>
                    )}
                  </React.Fragment>
                );
              }
            )}
        </>
      )}
    </ul>
  );
};

export { CarerreTimeline };
