import {
  COLOR_VARIANT,
  THEME_MODE,
  type ALLOWED_HEADING_TAGS,
} from "../../../../../constants";
import { useTheme } from "../../../../../hooks";
import type { ValueOf } from "../../../../../types/utiles";
import { getNextAllowedHeadingTag } from "../../../../../utilities";
import { Badge } from "../../../../Badge/Badge";
import { ALLOWED_BADGE_COMPONENT } from "../../../../Badge/Badge.constants";

type CarerreDescriptionProps = {
  technologiesStack: string[];
  description: string;
  headingComponent: ValueOf<typeof ALLOWED_HEADING_TAGS>;
  title?: string;
};

const CarerreDescription = ({
  technologiesStack,
  title,
  description,
  headingComponent,
}: CarerreDescriptionProps) => {
  const { themeMode } = useTheme();

  const isDarkMode = themeMode === THEME_MODE.DARK;
  const JobDescriptionHeading = getNextAllowedHeadingTag(headingComponent);

  return (
    <div className="w-full h-full px-3 pl-6 col-span-6 xl:col-span-7">
      <div className="flex flex-col gap-5 justify-between">
        <section className="flex items-center lg:items-start flex-col gap-1 w-full">
          <JobDescriptionHeading className="text-center lg:text-start uppercase">
            {title ? title : "Job Description"}
          </JobDescriptionHeading>

          <p className="text-sm text-center lg:text-start">{description}</p>
        </section>

        <ul className="flex justify-center lg:justify-start flex-wrap gap-1">
          {technologiesStack.map((TechnologiesItem) => (
            <Badge
              key={TechnologiesItem}
              colorVariant={COLOR_VARIANT.PRIMARY}
              as={ALLOWED_BADGE_COMPONENT.LI}
              isSquareShape
              forceDefaultBG={isDarkMode}>
              {TechnologiesItem}
            </Badge>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarerreDescription;
