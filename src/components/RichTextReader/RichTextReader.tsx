import React from "react";
import { COLOR_VARIANT } from "../../constants";
import { ValueOf } from "../../types/utiles";
import { RICH_TEXT_READER_VARIANT } from "./RichTextReader.constants";
import { formatRichText } from "./RichtextReader.utilities";
import { v4 as uuid } from "uuid";

type RichTextReaderProps = React.PropsWithChildren<{
  variant?: ValueOf<typeof RICH_TEXT_READER_VARIANT>;
  primaryColorVariant?: ValueOf<typeof COLOR_VARIANT>;
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
}>;

const RichTextReader = ({ children }: RichTextReaderProps) => {
  const areChildrenValid = Array.isArray(children)
    ? children.every((item) => typeof item === "string")
    : typeof children === "string";

  const resolvedChildren: string[] = Array.isArray(children)
    ? children
    : [children];

  if (areChildrenValid) {
    return (
      <>
        {resolvedChildren.map((child) => {
          console.log("test: ", formatRichText(child));

          return (
            <React.Fragment key={uuid()}>
              {formatRichText(child)}
            </React.Fragment>
          );
        })}
      </>
    );
  }

  console.log("error: Invalid children type");

  return <>{children}</>;
};

export { RichTextReader };
