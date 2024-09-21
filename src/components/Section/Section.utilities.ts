import { ValueOf } from "../../types/utiles";
import { SECTION_COLOR_VARIANT } from "./Section.constants";

const shadows = [
    'shadow-md',
    'shadow-variant-2-md',
    'shadow-variant-3-md',
    'shadow-variant-4-md',
] as string[];

const insetShadows = [
    'shadow-md',
    'shadow-variant-2-md',
    'shadow-variant-3-md',
    'shadow-variant-4-md',
] as string[];

const bagroundsVariants = [
    'bg-textColor-primary',
    'bg-accentColor-primary',
    'bg-accentColor-secondary',
    'bg-accentColor-tertiary',
] as string[];

const textColorVariants = [
    'text-textColor-primary',
    'text-accentColor-primary',
    'text-accentColor-secondary',
    'text-accentColor-tertiary',
] as string[];

const getShadowVariant = (color: ValueOf<typeof SECTION_COLOR_VARIANT>): string => {
    switch (color) {
        case SECTION_COLOR_VARIANT.DEFAULT:
            return shadows[0];
        case SECTION_COLOR_VARIANT.PRIMARY:
            return shadows[1];
        case SECTION_COLOR_VARIANT.SECONDARY:
            return shadows[2];
        case SECTION_COLOR_VARIANT.TERTIARY:
            return shadows[3];
    }
} 

const getInsetShadowVariant = (color: ValueOf<typeof SECTION_COLOR_VARIANT>): string => {
    switch (color) {
        case SECTION_COLOR_VARIANT.DEFAULT:
            return insetShadows[0];
        case SECTION_COLOR_VARIANT.PRIMARY:
            return insetShadows[1];
        case SECTION_COLOR_VARIANT.SECONDARY:
            return insetShadows[2];
        case SECTION_COLOR_VARIANT.TERTIARY:
            return insetShadows[3];
    }
}

const getBagroundVariant = (color: ValueOf<typeof SECTION_COLOR_VARIANT>): string => {
    switch (color) {
        case SECTION_COLOR_VARIANT.DEFAULT:
            return bagroundsVariants[0];
        case SECTION_COLOR_VARIANT.PRIMARY:
            return bagroundsVariants[1];
        case SECTION_COLOR_VARIANT.SECONDARY:
            return bagroundsVariants[2];
        case SECTION_COLOR_VARIANT.TERTIARY:
            return bagroundsVariants[3];
    }
}

const getTextColorVariant = (color: ValueOf<typeof SECTION_COLOR_VARIANT>): string => {
    switch (color) {
        case SECTION_COLOR_VARIANT.DEFAULT:
            return textColorVariants[0];
        case SECTION_COLOR_VARIANT.PRIMARY:
            return textColorVariants[1];
        case SECTION_COLOR_VARIANT.SECONDARY:
            return textColorVariants[2];
        case SECTION_COLOR_VARIANT.TERTIARY:
            return textColorVariants[3];
    }
}

export { getInsetShadowVariant, getShadowVariant, getBagroundVariant, getTextColorVariant };
