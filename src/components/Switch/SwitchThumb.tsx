import { twMerge } from "tailwind-merge";
import {
  BG_COLORS_CLASSES,
  BORDER_BOTTOM_COLORS_CLASSES,
  BORDER_COLORS_CLASSES,
  BORDER_TOP_COLORS_CLASSES,
  COLOR_VARIANT,
} from "../../constants";
import { ValueOf } from "../../types/utiles";

type SwitchThumbProps = {
  colorVariant: ValueOf<typeof COLOR_VARIANT>;
  customClasses?: string;
  idleText?: string;
  triggeredText?: string;
};

const SwitchThumb = ({
  colorVariant,
  customClasses,
  idleText,
  triggeredText,
}: SwitchThumbProps) => {
  return (
    <div className={twMerge("absolute", customClasses)}>
      <div className="relative flex">
        <div
          className={twMerge(
            BG_COLORS_CLASSES?.[colorVariant],
            BORDER_COLORS_CLASSES?.[colorVariant],
            "flex items-center w-12 h-12 rounded-full border-solid border-2 text-backgroundColor-primary text-[12px] font-extrabold"
          )}>
          {triggeredText}
        </div>

        <div
          className={twMerge(
            BORDER_COLORS_CLASSES?.[colorVariant],
            "w-12 h-12 rounded-full border-solid border-2"
          )}
        />

        <div
          className={twMerge(
            BG_COLORS_CLASSES?.[colorVariant],
            BORDER_COLORS_CLASSES?.[colorVariant],
            "flex items-center w-12 h-12 rounded-full border-solid border-2 text-backgroundColor-primary text-[12px] font-extrabold"
          )}>
          {idleText && <span className="m-1">{idleText}</span>}
        </div>

        <div
          className={twMerge(
            "absolute bottom-[0.188rem] left-[1.875rem] mx-auto h-0 w-0 border-r-[15px] border-b-[22.5px] border-l-[15px] border-solid border-r-transparent border-l-transparent",
            BORDER_BOTTOM_COLORS_CLASSES?.[colorVariant]
          )}
        />
        <div
          className={twMerge(
            "absolute top-[0.188rem] left-[1.875rem] mx-auto h-0 w-0 border-r-[15px] border-t-[22.5px] border-l-[15px] border-solid border-r-transparent border-l-transparent",
            BORDER_TOP_COLORS_CLASSES?.[colorVariant]
          )}
        />
        <div
          className={twMerge(
            "absolute bottom-[0.188rem] right-[1.875rem] mx-auto h-0 w-0 border-r-[15px] border-b-[22.5px] border-l-[15px] border-solid border-r-transparent border-l-transparent",
            BORDER_BOTTOM_COLORS_CLASSES?.[colorVariant]
          )}
        />
        <div
          className={twMerge(
            "absolute top-[0.188rem] right-[1.875rem] mx-auto h-0 w-0 border-r-[15px] border-t-[22.5px] border-l-[15px] border-solid border-r-transparent border-l-transparent",
            BORDER_TOP_COLORS_CLASSES?.[colorVariant]
          )}
        />

        <div
          className={twMerge(
            "absolute top-1/2 left-[2.8125rem] w-1 h-2 -translate-y-1/2",
            BG_COLORS_CLASSES?.[colorVariant]
          )}
        />
        <div
          className={twMerge(
            "absolute top-1/2 right-[2.8125rem] w-1 h-2 -translate-y-1/2",
            BG_COLORS_CLASSES?.[colorVariant]
          )}
        />
      </div>
    </div>
  );
};

export { SwitchThumb };
