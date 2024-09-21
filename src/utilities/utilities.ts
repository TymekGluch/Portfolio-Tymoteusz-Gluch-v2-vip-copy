import { COLOR_VARIANT } from "../constants";
import { ValueOf } from "../types/utiles";

//apiQuery

const baseApiUrl = 'https://cdn.contentful.com' 
const apiKey = import.meta.env.VITE_API_ACCESS_TOKEN;
const apiSpace = import.meta.env.VITE_CONTENTFULL_SPACE;

const generateAssetQuery = (assetId: string): string =>
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/assets/${assetId}?access_token=${apiKey}`;

const generateEntryQuery  = (entryId: string): string => 
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/entries/${entryId}?access_token=${apiKey}`;

//colors variants of classes

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

//function to get class on color variants base

const getShadowVariant = (color: ValueOf<typeof COLOR_VARIANT>): string => {
  switch (color) {
      case COLOR_VARIANT.DEFAULT:
          return shadows[0];
      case COLOR_VARIANT.PRIMARY:
          return shadows[1];
      case COLOR_VARIANT.SECONDARY:
          return shadows[2];
      case COLOR_VARIANT.TERTIARY:
          return shadows[3];
  }
} 

const getInsetShadowVariant = (color: ValueOf<typeof COLOR_VARIANT>): string => {
  switch (color) {
      case COLOR_VARIANT.DEFAULT:
          return insetShadows[0];
      case COLOR_VARIANT.PRIMARY:
          return insetShadows[1];
      case COLOR_VARIANT.SECONDARY:
          return insetShadows[2];
      case COLOR_VARIANT.TERTIARY:
          return insetShadows[3];
  }
}

const getBagroundVariant = (color: ValueOf<typeof COLOR_VARIANT>): string => {
  switch (color) {
      case COLOR_VARIANT.DEFAULT:
          return bagroundsVariants[0];
      case COLOR_VARIANT.PRIMARY:
          return bagroundsVariants[1];
      case COLOR_VARIANT.SECONDARY:
          return bagroundsVariants[2];
      case COLOR_VARIANT.TERTIARY:
          return bagroundsVariants[3];
  }
}

const getTextColorVariant = (color: ValueOf<typeof COLOR_VARIANT>): string => {
  switch (color) {
      case COLOR_VARIANT.DEFAULT:
          return textColorVariants[0];
      case COLOR_VARIANT.PRIMARY:
          return textColorVariants[1];
      case COLOR_VARIANT.SECONDARY:
          return textColorVariants[2];
      case COLOR_VARIANT.TERTIARY:
          return textColorVariants[3];
  }
}

export { generateAssetQuery, generateEntryQuery, baseApiUrl, getShadowVariant, getTextColorVariant, getBagroundVariant, getInsetShadowVariant }