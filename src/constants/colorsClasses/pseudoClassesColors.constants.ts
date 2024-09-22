import { COLOR_VARIANT } from "../constants"

const beforeColorVariants = [
    'before:bg-textColor-primary',
    'before:bg-accentColor-primary',
    'before:bg-accentColor-secondary',
    'before:bg-accentColor-tertiary',
]
const afterColorVariants = [
    'after:bg-textColor-primary',
    'after:bg-accentColor-primary',
    'after:bg-accentColor-secondary',
    'after:bg-accentColor-tertiary',
]

type PseudoClassesType = Record<keyof typeof COLOR_VARIANT, string>

const keys = Object.keys(COLOR_VARIANT)

const BEFORE_COLORS_CLASSES: PseudoClassesType = beforeColorVariants.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as PseudoClassesType)

const AFTER_COLORS_CLASSES: PseudoClassesType = afterColorVariants.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as PseudoClassesType) 

export { BEFORE_COLORS_CLASSES, AFTER_COLORS_CLASSES }