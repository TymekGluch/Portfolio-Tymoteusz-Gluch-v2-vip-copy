import { SwitchInputProps } from "./Switch.types";

const SwitchInput = ({
  defaultChecked,
  ...restInputProps
}: SwitchInputProps) => {
  return (
    <input
      key={defaultChecked?.toString()}
      type="checkbox"
      className="sr-only peer"
      {...restInputProps}
      defaultChecked={defaultChecked}
    />
  );
};

export { SwitchInput };
