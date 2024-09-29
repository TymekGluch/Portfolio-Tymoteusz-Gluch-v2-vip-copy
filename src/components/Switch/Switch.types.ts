import { COLOR_VARIANT } from "../../constants";
import { ValueOf } from "../../types/utiles";

type SwitchCustomProps = {
    colorVariant?: ValueOf<typeof COLOR_VARIANT>;
    idleIcon?: React.ReactNode;
    triggeredIcon?: React.ReactNode;
    idleText?: string;
    triggeredText?: string;
    className?: string;
  };
  
type SwitchInputProps = {
    checked?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    name?: string;
    id?: string;
  };
  
export type SwitchProps = SwitchInputProps & SwitchCustomProps;