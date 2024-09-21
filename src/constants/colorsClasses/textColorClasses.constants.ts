import { COLOR_VARIANT } from "../constants"

const textColorVariants: string[] = [
    'text-textColor-primary',
    'text-accentColor-primary',
    'text-accentColor-secondary',
    'text-accentColor-tertiary',
] 

type TextColorsClassesType = Record<keyof typeof COLOR_VARIANT, string>

const keys = Object.keys(COLOR_VARIANT)

const TEXT_COLORS_CLASSES: TextColorsClassesType = textColorVariants.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as TextColorsClassesType)


export { TEXT_COLORS_CLASSES }