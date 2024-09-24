import {
  BG_COLORS_CLASSES,
  COLOR_VARIANT,
  TEXT_COLORS_CLASSES,
} from "../../../../constants";
import { ContentProgress } from "../../../Progress";
import { PROGRESS_STATUS } from "../../../Progress/Progress.constants";
import { useFetchCarerreData } from "./api/useFetchCarerreData.hook";
import PuzzleIcon from "../../../../assets/icons/puzzle.svg?react";
import ComputerIcon from "../../../../assets/icons/computer.svg?react";
import ScaleIcon from "../../../../assets/icons/scale.svg?react";
import WalletIcon from "../../../../assets/icons/wallet.svg?react";
import { ValueOf } from "../../../../types/utiles";
import { CARERRE_HEADING_VARIANT, opacityArray } from "./Carerre.constants";
import { CarerreBelt } from "./CarerreBelt";
import React from "react";
import {
  getResolvedYYYYMonthNameFormat,
  getTimeDifferenceFullFormated,
  getTimeDifferenceInMonth,
} from "./Carerre.utilities";
import { v4 as uuid } from "uuid";
import { twMerge } from "tailwind-merge";

type CarerreProps = {
  headingComponent?: ValueOf<typeof CARERRE_HEADING_VARIANT>;
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  primaryColorVariant?: ValueOf<typeof COLOR_VARIANT>;
};

const Carerre = ({
  headingComponent = CARERRE_HEADING_VARIANT.H2,
  colorVariant = COLOR_VARIANT.DEFAULT,
  primaryColorVariant = COLOR_VARIANT.DEFAULT,
}: CarerreProps) => {
  const { data, isLoading, isError } = useFetchCarerreData();

  const HeadingComponent = headingComponent;

  const iconsArray: React.ReactNode[] = [
    <PuzzleIcon />,
    <ComputerIcon />,
    <ScaleIcon />,
    <WalletIcon />,
  ];

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

                return (
                  <React.Fragment key={title}>
                    <li className="flex flex-col justify-center items-center gap-1">
                      <HeadingComponent className="text-md uppercase text-center">
                        {title}
                      </HeadingComponent>
                      {description && (
                        <p className="text-center opacity-90">{description}</p>
                      )}
                      <p className="opacity-90">{differenceInYearAndMonth}</p>
                      {image ? (
                        <img
                          src={image}
                          alt=""
                          className="w-12 h-12 object-contain rounded-full"
                        />
                      ) : (
                        <div
                          className={twMerge(
                            "w-12 h-12 my-1",
                            TEXT_COLORS_CLASSES?.[primaryColorVariant]
                          )}>
                          {iconsArray[index]}
                        </div>
                      )}
                      {resolvedFinishDate ? (
                        <>
                          <p className="text-center opacity-90">
                            to {resolvedFinishDate}
                          </p>

                          <CarerreBelt colorVariant={colorVariant} />
                        </>
                      ) : (
                        <>
                          <p className="text-center opacity-90">Now</p>

                          <CarerreBelt colorVariant={colorVariant} />
                        </>
                      )}
                      <p className="text-center opacity-90">
                        from {resolvedStartDate}
                      </p>
                    </li>

                    {!isLastElement && (
                      <div className="flex justify-center items-center gap-3 w-full">
                        {Array.from({ length: 11 }).map((_, index) => {
                          const resolvedOpacityClass = opacityArray[index];

                          return (
                            <div
                              key={uuid()}
                              className={twMerge(
                                "block w-2 h-2 rounded-full",
                                BG_COLORS_CLASSES?.[colorVariant],
                                resolvedOpacityClass
                              )}
                            />
                          );
                        })}
                      </div>
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

export { Carerre };
