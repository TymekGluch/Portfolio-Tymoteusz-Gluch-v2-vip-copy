import { v4 as uuid } from "uuid";
import { ContentProgress } from "../../../../Progress";
import { PROGRESS_STATUS } from "../../../../Progress/Progress.constants";
import type { ValueOf } from "../../../../../types/utiles";
import type { COLOR_VARIANT } from "../../../../../constants";

type CarerreSkeletonProps = {
  isError: boolean;
  colorVariant: ValueOf<typeof COLOR_VARIANT>;
};

const CarerreSkeleton = ({ isError, colorVariant }: CarerreSkeletonProps) => {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {Array.from({ length: 6 }, () => (
        <li key={uuid()}>
          {isError ? (
            <ContentProgress
              status={PROGRESS_STATUS.ERROR}
              sizeClass="w-full h-8 rounded-full"
            />
          ) : (
            <ContentProgress
              color={colorVariant}
              status={PROGRESS_STATUS.LOADING}
              sizeClass="w-full h-8 rounded-sm"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export { CarerreSkeleton };
