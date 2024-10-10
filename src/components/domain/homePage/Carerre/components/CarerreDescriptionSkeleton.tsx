import { v4 as uuid } from "uuid";
import { COLOR_VARIANT } from "../../../../../constants";
import { PROGRESS_STATUS } from "../../../../Progress/Progress.constants";
import { ContentProgress } from "../../../../Progress";
import type { ValueOf } from "../../../../../types/utiles";

type CarerreDescriptionSkeletonProps = {
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
};

const CarerreDescriptionSkeleton = ({
  colorVariant,
}: CarerreDescriptionSkeletonProps) => {
  return (
    <>
      {Array.from({ length: 8 }, () => (
        <ContentProgress
          key={uuid()}
          color={colorVariant}
          status={PROGRESS_STATUS.LOADING}
          sizeClass="w-full h-7"
        />
      ))}
    </>
  );
};

export { CarerreDescriptionSkeleton };
