import { COLOR_VARIANT, TEXT_COLORS_CLASSES } from "../../../../../constants";
import PuzzleIcon from "../../../../../assets/icons/puzzle.svg?react";
import ComputerIcon from "../../../../../assets/icons/computer.svg?react";
import ScaleIcon from "../../../../../assets/icons/scale.svg?react";
import WalletIcon from "../../../../../assets/icons/wallet.svg?react";
import { CARERRE_HEADING_VARIANT } from "../CarerreTimeline.constants";
import { ValueOf } from "../../../../../types/utiles";
import { twMerge } from "tailwind-merge";

type CarerreItemHeaderProps = {
  title: string;
  shortDescription: string | null;
  periodSummary: string;
  imageSrc: string | null;
  index: number;
  headingTag: ValueOf<typeof CARERRE_HEADING_VARIANT>;
  primaryColorVarint: ValueOf<typeof COLOR_VARIANT>;
};

const iconsArray: React.ReactNode[] = [
  <PuzzleIcon />,
  <ComputerIcon />,
  <ScaleIcon />,
  <WalletIcon />,
];

const CarerreItemHeader = ({
  title,
  shortDescription,
  periodSummary,
  imageSrc,
  index,
  headingTag,
  primaryColorVarint,
}: CarerreItemHeaderProps) => {
  const HeadingComponent = headingTag;

  return (
    <header className="flex flex-col justify-center items-center gap-1 col-span-3">
      <HeadingComponent className="text-md uppercase font-bold text-center ">
        {title}
      </HeadingComponent>

      {shortDescription && (
        <p className="text-center opacity-85">{shortDescription}</p>
      )}

      <p className="opacity-85 text-nowrap">{periodSummary}</p>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          className="w-12 h-12 object-contain rounded-full"
        />
      ) : (
        <div
          className={twMerge(
            "w-12 h-12 my-1",
            TEXT_COLORS_CLASSES?.[primaryColorVarint]
          )}>
          {iconsArray[index]}
        </div>
      )}
    </header>
  );
};

export { CarerreItemHeader };
