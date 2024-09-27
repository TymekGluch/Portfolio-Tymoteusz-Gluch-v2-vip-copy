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
                {
                  title,
                  image: imageSrc,
                  startDate,
                  finishDate,
                  shortDescription,
                  carerrePeriodDescription,
                },
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
                const periodSummary = `{${differenceInYearAndMonth}ds}`;

                const resolvedDescription =
                  carerrePeriodDescription?.content?.[0]?.content[0]?.value ??
                  "";

                return (
                  <React.Fragment key={title}>
                    <li className="w-full">
                      <section className="flex lg:grid lg:grid-cols-12 flex-col justify-center items-center gap-1 w-full h-fit">
                        {isMobile ? (
                          <>
                            <CarerreItemHeader
                              periodSummary={periodSummary}
                              primaryColorVarint={primaryColorVariant}
                              headingTag={headingComponent}
                              index={index}
                              title={title}
                              shortDescription={shortDescription}
                              imageSrc={imageSrc}
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
                              shortDescription={shortDescription}
                              periodSummary={periodSummary}
                              imageSrc={imageSrc}
                              headingTag={headingComponent}
                              index={index}
                              primaryColorVarint={primaryColorVariant}
                            />

                            {!isMobile && (
                              <div className="flex justify-center items-center h-full col-span-7 ml-5">
                                {resolvedDescription}
                              </div>
                            )}
                          </>
                        )}
                      </section>
                    </li>

                    {!isLastElement && (
                      <li
                        className={twMerge(
                          "flex justify-center items-center gap-3 w-full xl:gap-5",
                          !isMobile && "my-4"
                        )}>
                        {Array.from({ length: isMobile ? 11 : 22 }).map(
                          (_, index) => {
                            const resolvedIndex = !isMobile
                              ? Math.floor(index / 2)
                              : index;
                            const resolvedOpacityClass =
                              opacityArray[resolvedIndex];

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
                          }
                        )}
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
