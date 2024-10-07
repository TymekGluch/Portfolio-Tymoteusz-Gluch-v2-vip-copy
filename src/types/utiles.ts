import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export type ValueOf<T> = T[keyof T];

export type ContentFulDokumentType = React.ComponentProps<typeof documentToReactComponents>;

