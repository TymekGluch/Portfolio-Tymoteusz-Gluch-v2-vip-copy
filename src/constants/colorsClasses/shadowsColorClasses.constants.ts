import { COLOR_VARIANT } from "../constants";

const shadows = [
    'shadow-md',
    'shadow-variant-2-md',
    'shadow-variant-3-md',
    'shadow-variant-4-md',
  ] as string[];
  
  const insetShadows = [
    'shadow-md-inner',
    'shadow-variant-2-md-inner',
    'shadow-variant-3-md-inner',
    'shadow-variant-4-md-inner',
  ] as string[];

  type ShadowColorsClassesType = Record<keyof typeof COLOR_VARIANT, string>

const keys = Object.keys(COLOR_VARIANT)

const SHADOW_COLORS_CLASSES: ShadowColorsClassesType = shadows.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as ShadowColorsClassesType)

const INSET_SHADOW_COLORS_CLASSES: ShadowColorsClassesType = insetShadows.reduce((accumulator, current, index) => ({...accumulator, [keys[index]]: current})
, {} as ShadowColorsClassesType)

export { SHADOW_COLORS_CLASSES, INSET_SHADOW_COLORS_CLASSES}