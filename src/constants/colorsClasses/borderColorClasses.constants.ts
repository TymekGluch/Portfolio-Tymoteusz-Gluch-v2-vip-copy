import { COLOR_VARIANT } from "../constants"

const borderColorVariants: string[] = [
    'border-textColor-primary',
    'border-accentColor-primary',
    'border-accentColor-secondary',
    'border-accentColor-tertiary',
]

const borderTopColorVariants: string[] = [
  'border-t-textColor-primary',
  'border-t-accentColor-primary',
  'border-t-accentColor-secondary',
  'border-t-accentColor-tertiary',
]

const borderBottomColorVariants: string[] = [
  'border-b-textColor-primary',
  'border-b-accentColor-primary',
  'border-b-accentColor-secondary',
  'border-b-accentColor-tertiary',
]


type BorderColorsClassesType = Record<keyof typeof COLOR_VARIANT, string>

const keys = Object.keys(COLOR_VARIANT)

const BORDER_COLORS_CLASSES: BorderColorsClassesType = borderColorVariants.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as BorderColorsClassesType)

const BORDER_TOP_COLORS_CLASSES: BorderColorsClassesType = borderTopColorVariants.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as BorderColorsClassesType)


const BORDER_BOTTOM_COLORS_CLASSES: BorderColorsClassesType = borderBottomColorVariants.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as BorderColorsClassesType)


export { BORDER_COLORS_CLASSES, BORDER_TOP_COLORS_CLASSES, BORDER_BOTTOM_COLORS_CLASSES }