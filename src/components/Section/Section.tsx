import React from "react";
import { ValueOf } from "../../types/utiles";
import { SECTION_COMPONENT, SECTION_HEADING_TAG } from "./Section.constants";
import classNames from "classnames";
import {
  BG_COLORS_CLASSES,
  COLOR_VARIANT,
  SHADOW_COLORS_CLASSES,
  TEXT_COLORS_CLASSES,
} from "../../constants";

type SectionProps = React.PropsWithChildren<{
  sectionIcon: React.ReactNode;
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  sectionComponent?: ValueOf<typeof SECTION_COMPONENT>;
  headingTag?: ValueOf<typeof SECTION_HEADING_TAG>;
  heading?: string;
}>;

const Section: React.FC<
  SectionProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  children,
  sectionIcon,
  colorVariant = COLOR_VARIANT.DEFAULT,
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
        TEXT_COLORS_CLASSES?.[colorVariant]
      )}
      {...restProps}>
      {!!heading && (
        <HeadingTag
          className={classNames(
            "flex flex-col justify-center items-center gap-2 w-full text-2xl uppercase ",
            TEXT_COLORS_CLASSES?.[colorVariant]
          )}>
          {heading}

          <span
            className={classNames(
              "w-full h-px",
              BG_COLORS_CLASSES?.[colorVariant],
              SHADOW_COLORS_CLASSES?.[colorVariant]
            )}
          />
        </HeadingTag>
      )}

      <div
        className={classNames(
          "absolute right-0 top-0 hidden lg:flex flex-col justify-between items-center w-[12.5%] h-full translate-x-[calc(100%_+_1px+1rem)] "
        )}>
        <div className="w-12 h-12">{sectionIcon}</div>
        <span
          className={classNames(
            "block w-px h-[calc(100%_-_4rem)] mt-2",
            SHADOW_COLORS_CLASSES?.[colorVariant],
            BG_COLORS_CLASSES?.[colorVariant]
          )}
        />
        <span
          className={classNames(
            "block w-4 h-4 rounded-full",
            BG_COLORS_CLASSES?.[colorVariant],
            SHADOW_COLORS_CLASSES?.[colorVariant]
          )}
        />
      </div>

      {children}
    </Component>
  );
};

export { Section };
