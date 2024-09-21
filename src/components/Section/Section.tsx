import React from "react";
import { ValueOf } from "../../types/utiles";
import {
  SECTION_COLOR_VARIANT,
  SECTION_COMPONENT,
  SECTION_HEADING_TAG,
  SECTION_SHADOW_SIZE,
} from "./Section.constants";
import classNames from "classnames";
import {
  getBagroundVariant,
  getInsetShadowVariant,
  getShadowVariant,
  getTextColorVariant,
} from "./Section.utilities";

type SectionProps = React.PropsWithChildren<{
  sectionIcon: React.ReactNode;
  colorVariant?: ValueOf<typeof SECTION_COLOR_VARIANT>;
  sectionComponent?: ValueOf<typeof SECTION_COMPONENT>;
  headingTag?: ValueOf<typeof SECTION_HEADING_TAG>;
  heading?: string;
}>;

const Section: React.FC<
  SectionProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  children,
  sectionIcon,
  colorVariant = SECTION_COLOR_VARIANT.DEFAULT,
  headingTag = SECTION_HEADING_TAG.H2,
  heading,
  sectionComponent = SECTION_COMPONENT.SECTION,
  ...restProps
}) => {
  const Component = sectionComponent;
  const HeadingTag = headingTag;

  return (
    <Component
      className={classNames(
        "relative flex flex-col justify-between items-center gap-6 w-[calc(100%_+_3rem)] min-h-32 p-6 py-0 scroll-m-20 first-of-type:scroll-m-28",
        getTextColorVariant(colorVariant)
      )}
      {...restProps}>
      {!!heading && (
        <HeadingTag
          className={classNames(
            "flex flex-col justify-center items-center gap-2 w-full text-2xl uppercase ",
            getTextColorVariant(colorVariant)
          )}>
          {heading}

          <span
            className={classNames(
              "w-full h-px",
              getBagroundVariant(colorVariant),
              getShadowVariant(colorVariant)
            )}
          />
        </HeadingTag>
      )}

      <div
        className={classNames(
          "absolute right-0 top-0 hidden lg:flex flex-col justify-between items-center w-[12.5%] h-full translate-x-[calc(100%_+_1px+1rem)] "
        )}>
        {sectionIcon}
        <span
          className={classNames(
            "block w-px h-[calc(100%_-_4rem)] mt-2",
            getShadowVariant(colorVariant),
            getBagroundVariant(colorVariant)
          )}
        />
        <span
          className={classNames(
            "block w-4 h-4 rounded-full",
            getBagroundVariant(colorVariant),
            getShadowVariant(colorVariant)
          )}
        />
      </div>

      {children}
    </Component>
  );
};

export { Section };
