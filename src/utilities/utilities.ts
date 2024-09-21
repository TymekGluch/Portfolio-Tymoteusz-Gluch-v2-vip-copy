
//apiQuery

const baseApiUrl = 'https://cdn.contentful.com' 
const apiKey = import.meta.env.VITE_API_ACCESS_TOKEN;
const apiSpace = import.meta.env.VITE_CONTENTFULL_SPACE;

const generateAssetQuery = (assetId: string): string =>
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/assets/${assetId}?access_token=${apiKey}`;

const generateEntryQuery  = (entryId: string): string => 
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/entries/${entryId}?access_token=${apiKey}`;


export { generateAssetQuery, generateEntryQuery, baseApiUrl, }