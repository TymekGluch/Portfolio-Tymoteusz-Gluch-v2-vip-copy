import { COLOR_VARIANT } from "../constants"

const backgroundsVariants: string[] = [
    'bg-textColor-primary',
    'bg-accentColor-primary',
    'bg-accentColor-secondary',
    'bg-accentColor-tertiary',
  ]

type BGColorsClassesType = Record<keyof typeof COLOR_VARIANT, string>

const keys = Object.keys(COLOR_VARIANT)

const BG_COLORS_CLASSES: BGColorsClassesType = backgroundsVariants.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as BGColorsClassesType)


export { BG_COLORS_CLASSES }