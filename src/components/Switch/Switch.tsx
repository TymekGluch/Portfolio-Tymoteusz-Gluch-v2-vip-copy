import { COLOR_VARIANT, TEXT_COLORS_CLASSES } from "../../constants";
import { twMerge } from "tailwind-merge";
import { SwitchThumb } from "./SwitchThumb";
import { SwitchProps } from "./Switch.types";

const Switch = ({
  idleIcon,
  triggeredIcon,
  colorVariant = COLOR_VARIANT.DEFAULT,
  idleText,
  triggeredText,
  className: customClassName,
  defaultChecked,
  ...restInputProps
}: SwitchProps) => {
  const iconWrapperClass = twMerge(
    TEXT_COLORS_CLASSES?.[colorVariant],
    "flex items-center justify-center w-12 h-12 p-1"
  );

  const resolvedIdleText = idleText?.toUpperCase();
  const resolvedTriggeredText = triggeredText?.toUpperCase();

  return (
    <>
      <label
        className={twMerge(
          customClassName,
          `relative flex justify-between items-center w-24 h-12 bg-transparent rounded-full overflow-clip`,
          "has-[input:focus]:animate-pulse has-[input:hover]:animate-pulse"
        )}>
        <input
          key={defaultChecked?.toString()}
          type="checkbox"
          className="sr-only peer"
          {...restInputProps}
          defaultChecked={defaultChecked}
        />

        <SwitchThumb
          colorVariant={colorVariant}
          customClasses="-left-[48px] transition ease-in-out duration-200 peer-checked:translate-x-[48px]"
          idleText={resolvedIdleText}
          triggeredText={resolvedTriggeredText}
        />

        <div className={iconWrapperClass}>{idleIcon}</div>
        <div className={iconWrapperClass}>{triggeredIcon}</div>
      </label>
    </>
  );
};

export { Switch };
