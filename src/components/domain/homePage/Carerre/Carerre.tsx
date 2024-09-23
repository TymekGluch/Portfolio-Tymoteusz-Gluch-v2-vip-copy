import { BG_COLORS_CLASSES, COLOR_VARIANT } from "../../../../constants";
import { Progress } from "../../../Progress";
import {
  PROGRESS_STATUS,
  PROGRESS_VARIANT,
} from "../../../Progress/Progress.constants";
import { useFetchCarerreData } from "./api/useFetchCarerreData.hook";
import PuzzleIcon from "../../../../assets/icons/puzzle.svg?react";
import ComputerIcon from "../../../../assets/icons/computer.svg?react";
import ScaleIcon from "../../../../assets/icons/scale.svg?react";
import WalletIcon from "../../../../assets/icons/wallet.svg?react";
import { ValueOf } from "../../../../types/utiles";
import { CARERRE_HEADING_VARIANT } from "./Carerre.constants";
import { twMerge } from "tailwind-merge";
import { CarerreBelt } from "./CarerreBelt";
import React from "react";

type CarerreProps = {
  headingComponent?: ValueOf<typeof CARERRE_HEADING_VARIANT>;
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
};

const Carerre = ({
  headingComponent = CARERRE_HEADING_VARIANT.H2,
  colorVariant = COLOR_VARIANT.TERTIARY,
}: CarerreProps) => {
  const { data, isLoading, isError } = useFetchCarerreData();

  const HeadingComponent = headingComponent;

  const iconsArray: React.ReactNode[] = [
    <PuzzleIcon />,
    <ComputerIcon />,
    <ScaleIcon />,
    <WalletIcon />,
  ];

  // const resolvedData = data?.reduce((accumulator, { startDate, finishDate, ...rest}, index) => {
  //   const resolvedStartDate =

  //   return accumulator
  // },[])

  return (
    <ul className="flex flex-col justify-center items-center gap-4 w-full">
      <li
        className={twMerge(
          "w-1/5 h-[0.063rem]",
          BG_COLORS_CLASSES?.[colorVariant]
        )}
      />

      {isError || isLoading ? (
        <Progress
          variant={PROGRESS_VARIANT.LINEAR}
          color={COLOR_VARIANT.TERTIARY}
          status={isLoading ? PROGRESS_STATUS.LOADING : PROGRESS_STATUS.ERROR}
        />
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

                return (
                  <React.Fragment key={title}>
                    <li className="flex flex-col justify-center items-center gap-2">
                      <HeadingComponent className="text-lg uppercase text-center">
                        {title}
                      </HeadingComponent>
                      {description && (
                        <p className="text-center opacity-90">{description}</p>
                      )}
                      {image ? (
                        <img
                          src={image}
                          alt=""
                          className="w-12 h-12 object-contain rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12">{iconsArray[index]}</div>
                      )}
                      {finishDate ? (
                        <>
                          <p className="text-center opacity-90">
                            to {finishDate}
                          </p>

                          <CarerreBelt colorVariant={colorVariant} />
                        </>
                      ) : (
                        <>
                          <p className="text-center opacity-90">now</p>

                          <CarerreBelt colorVariant={colorVariant} />
                        </>
                      )}
                      <p className="text-center opacity-90">from {startDate}</p>
                    </li>

                    {!isLastElement && (
                      <div
                        className={twMerge(
                          "w-1/3 h-[0.063rem]",
                          BG_COLORS_CLASSES?.[colorVariant]
                        )}
                      />
                    )}
                  </React.Fragment>
                );
              }
            )}
        </>
      )}

      <li
        className={twMerge(
          "w-1/5 h-[0.063rem]",
          BG_COLORS_CLASSES?.[colorVariant]
        )}
      />
    </ul>
  );
};

export { Carerre };
