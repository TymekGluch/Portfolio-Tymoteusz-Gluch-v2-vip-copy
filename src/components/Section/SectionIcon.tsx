import { twMerge } from "tailwind-merge";
import {
  BG_COLORS_CLASSES,
  SHADOW_COLORS_CLASSES,
  type COLOR_VARIANT,
} from "../../constants";
import type { ValueOf } from "../../types/utiles";

type SectionIlustrationProps = {
  sectionIcon: React.ReactNode;
  colorVariant: ValueOf<typeof COLOR_VARIANT>;
};

const SectionIcon = ({
  sectionIcon,
  colorVariant,
}: SectionIlustrationProps) => {
  return (
    <div
      className={twMerge(
        "absolute right-0 top-0 hidden lg:flex flex-col justify-between items-center w-[12.5%] h-full translate-x-[calc(100%_+_1px+1rem)] "
      )}>
      <div className="w-12 h-12">{sectionIcon}</div>
      <span
        className={twMerge(
          "block w-px h-[calc(100%_-_4rem)] mt-2",
          SHADOW_COLORS_CLASSES?.[colorVariant],
          BG_COLORS_CLASSES?.[colorVariant]
        )}
      />
      <span
        className={twMerge(
          "block w-4 h-4 rounded-full",
          BG_COLORS_CLASSES?.[colorVariant],
          SHADOW_COLORS_CLASSES?.[colorVariant]
        )}
      />
    </div>
  );
};

export default SectionIcon;
