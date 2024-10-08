import React from "react";
import { ALLOWED_HEADING_TAGS, COLOR_VARIANT } from "../../../../constants";
import { useIsMobile } from "../../../../hooks";
import { ValueOf } from "../../../../types/utiles";
import { useFetchCarerreData } from "./api/useFetchCarerreData.hook";
import { CARERRE_TIMELINE_VARIANT } from "./CarerreTimeline.constants";
import {
  getResolvedYYYYMonthNameFormat,
  getTimeDifferenceFullFormated,
  getTimeDifferenceInMonth,
} from "./CarerreTimeline.utilities";
import { CarerreItemHeader } from "./components/CarerreItemHeader";
import { CarerreItemTimeline } from "./components/CarerreItemTimeline";
import { CarerreSeparator } from "./components/CarerreSeparator";
import { CarerreSkeleton } from "./components/CarerreSkeleton";

type CarerreTimelineProps = {
  headingComponent?: ValueOf<typeof ALLOWED_HEADING_TAGS>;
  variant?: ValueOf<typeof CARERRE_TIMELINE_VARIANT>;
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  primaryColorVariant?: ValueOf<typeof COLOR_VARIANT>;
};

const CarerreDescription = React.lazy(
  () => import("./components/CarerreDescription")
);

const CarerreTimeline = ({
  headingComponent = ALLOWED_HEADING_TAGS.H2,
  colorVariant = COLOR_VARIANT.DEFAULT,
  primaryColorVariant = COLOR_VARIANT.DEFAULT,
  variant = CARERRE_TIMELINE_VARIANT.CIRCLE,
}: CarerreTimelineProps) => {
  const { data, isLoading, isError } = useFetchCarerreData();
  const isMobile = useIsMobile();

  return (
    <ul className="flex flex-col justify-center items-center gap-4 w-full">
      {isError || isLoading ? (
        <CarerreSkeleton isError={isError} colorVariant={colorVariant} />
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
                  description,
                  technologiesStack,
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

                            <React.Suspense
                              fallback={
                                <p className="flex justify-center items-center w-full h-full">
                                  loading ...
                                </p>
                              }>
                              <CarerreDescription
                                headingComponent={headingComponent}
                                description={description}
                                technologiesStack={technologiesStack}
                              />
                            </React.Suspense>
                          </>
                        )}
                      </section>
                    </li>

                    {!isLastElement && (
                      <CarerreSeparator
                        isMobile={isMobile}
                        variant={variant}
                        colorVariant={colorVariant}
                      />
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
