import React from "react";
import { ValueOf } from "../../types/utiles";
import { SECTION_COMPONENT, SECTION_HEADING_TAG } from "./Section.constants";
import {
  BG_COLORS_CLASSES,
  COLOR_VARIANT,
  SHADOW_COLORS_CLASSES,
  TEXT_COLORS_CLASSES,
} from "../../constants";
import { twMerge } from "tailwind-merge";

type SectionProps = React.PropsWithChildren<{
  sectionIcon: React.ReactNode;
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  as?: ValueOf<typeof SECTION_COMPONENT>;
  headingTag?: ValueOf<typeof SECTION_HEADING_TAG>;
  heading?: string;
}>;

const SectionIcon = React.lazy(() => import("./SectionIcon"));

const Section: React.FC<
  SectionProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  children,
  sectionIcon,
  colorVariant = COLOR_VARIANT.DEFAULT,
  headingTag = SECTION_HEADING_TAG.H2,
  heading,
  as: sectionCompnent = SECTION_COMPONENT.SECTION,
  ...restProps
}) => {
  const Component = sectionCompnent;
  const HeadingTag = headingTag;

  return (
    <Component
      className={twMerge(
        "relative flex flex-col justify-between items-center gap-6 w-[calc(100%_+_3rem)] min-h-32 p-6 py-0 scroll-m-20 first-of-type:scroll-m-28",
        TEXT_COLORS_CLASSES?.[colorVariant]
      )}
      {...restProps}>
      {!!heading && (
        <HeadingTag
          className={twMerge(
            "flex flex-col justify-center items-center gap-2 w-full text-2xl uppercase ",
            TEXT_COLORS_CLASSES?.[colorVariant]
          )}>
          {heading}

          <span
            className={twMerge(
              "w-full h-px",
              BG_COLORS_CLASSES?.[colorVariant],
              SHADOW_COLORS_CLASSES?.[colorVariant]
            )}
          />
        </HeadingTag>
      )}

      <React.Suspense>
        <SectionIcon sectionIcon={sectionIcon} colorVariant={colorVariant} />
      </React.Suspense>

      {children}
    </Component>
  );
};

export { Section };
