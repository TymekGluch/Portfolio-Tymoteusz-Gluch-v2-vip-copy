import { twMerge } from "tailwind-merge";
import { BG_COLORS_CLASSES, COLOR_VARIANT } from "../../../../constants";
import { ValueOf } from "../../../../types/utiles";

type CarerreBeltProps = {
  colorVariant: ValueOf<typeof COLOR_VARIANT>;
};

const CarerreBelt = ({ colorVariant }: CarerreBeltProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div
        className={twMerge(
          'className="block w-3 h-3 rounded-full',
          BG_COLORS_CLASSES?.[colorVariant]
        )}
      />
      <div
        className={twMerge(
          "block w-[0.125rem] h-6 bg-inherit",
          BG_COLORS_CLASSES?.[colorVariant]
        )}
      />
      <div
        className={twMerge(
          'className="block w-3 h-3 rounded-full',
          BG_COLORS_CLASSES?.[colorVariant]
        )}
      />
    </div>
  );
};

export { CarerreBelt };
