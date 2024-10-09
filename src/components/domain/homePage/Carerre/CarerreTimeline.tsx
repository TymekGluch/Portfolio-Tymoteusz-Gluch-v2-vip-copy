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
import LazyButton from "../../../Button";
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "../../../Button/Button.constants";
import ButtonIcon from "../../../../assets/icons/info.svg?react";
import ButtonAcitveIcon from "../../../../assets/icons/return.svg?react";

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
  const [renderDetailsArray, setRenderDetailsArray] = React.useState<boolean[]>(
    []
  );

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

                const shouldRenderDetails = renderDetailsArray[index];

                return (
                  <React.Fragment key={title}>
                    <li className="flex flex-col items-center gap-8 w-full">
                      <section className="flex lg:grid lg:grid-cols-12 flex-col justify-center items-center gap-1 w-full h-fit">
                        {isMobile ? (
                          <>
                            {shouldRenderDetails ? (
                              <React.Suspense>
                                <CarerreDescription
                                  headingComponent={headingComponent}
                                  description={description}
                                  technologiesStack={technologiesStack}
                                />
                              </React.Suspense>
                            ) : (
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
                            )}
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

                            <React.Suspense>
                              <CarerreDescription
                                headingComponent={headingComponent}
                                description={description}
                                technologiesStack={technologiesStack}
                              />
                            </React.Suspense>
                          </>
                        )}
                      </section>

                      {isMobile && (
                        <React.Suspense>
                          <LazyButton
                            onClick={() =>
                              setRenderDetailsArray((prevArray) => {
                                const resolvedPrevArray = [...prevArray];
                                resolvedPrevArray[index] =
                                  !resolvedPrevArray[index];

                                return resolvedPrevArray;
                              })
                            }
                            uppercase
                            className="mb-2"
                            variant={BUTTON_VARIANTS.FILLED}
                            size={BUTTON_SIZES.SMALL}
                            endIcon={
                              shouldRenderDetails ? (
                                <ButtonAcitveIcon />
                              ) : (
                                <ButtonIcon />
                              )
                            }
                            colorVariant={COLOR_VARIANT.PRIMARY}>
                            {shouldRenderDetails
                              ? "return to timeline"
                              : "show more details"}
                          </LazyButton>
                        </React.Suspense>
                      )}
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
