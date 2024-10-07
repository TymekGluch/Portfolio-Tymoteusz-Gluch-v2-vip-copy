
//apiQuery

import { ALLOWED_HEADING_TAGS } from "../constants";
import { ValueOf } from "../types/utiles";

type AllowedTagType = ValueOf<typeof ALLOWED_HEADING_TAGS>
type AllowedKeyType = keyof typeof ALLOWED_HEADING_TAGS

const allowedKeys: AllowedKeyType[] = Object.keys(ALLOWED_HEADING_TAGS) as AllowedKeyType[]
const allowedTags: AllowedTagType[] = Object.values(ALLOWED_HEADING_TAGS)

const getNextAllowedHeadingKeyTag = (currentHeadingTag: AllowedTagType): AllowedKeyType  => {
  const resolvedKeyIndex = allowedTags.indexOf(currentHeadingTag) - 1
  const lastKey = allowedKeys.find((_, index, array) => index === array.length - 1)

  return allowedKeys[resolvedKeyIndex] ?? lastKey 
}

const getNextAllowedHeadingTag = (currentHeadingTag: AllowedTagType): ValueOf<typeof ALLOWED_HEADING_TAGS> => ALLOWED_HEADING_TAGS[getNextAllowedHeadingKeyTag(currentHeadingTag)] 


const baseApiUrl = 'https://cdn.contentful.com' 
const apiKey = import.meta.env.VITE_API_ACCESS_TOKEN;
const apiSpace = import.meta.env.VITE_CONTENTFULL_SPACE;

const generateAssetQuery = (assetId: string): string =>
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/assets/${assetId}?access_token=${apiKey}`;

const generateEntryQuery  = (entryId: string): string => 
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/entries/${entryId}?access_token=${apiKey}`;

export { generateAssetQuery, generateEntryQuery, baseApiUrl, getNextAllowedHeadingTag}