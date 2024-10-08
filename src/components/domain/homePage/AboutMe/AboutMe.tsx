import { useFetchAboutMeData } from "./AboutMe.hooks";
import { ContentProgress } from "../../../Progress";
import { PROGRESS_STATUS } from "../../../Progress/Progress.constants";
import { BORDER_COLORS_CLASSES, COLOR_VARIANT } from "../../../../constants";
import { v4 as uuid } from "uuid";
import { twMerge } from "tailwind-merge";
import { ValueOf } from "../../../../types/utiles";

type AboutMeProps = {
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
};

const AboutMe = ({ colorVariant = COLOR_VARIANT.DEFAULT }: AboutMeProps) => {
  const { isError, isLoading, avatarAlt, avatarSorce, text } =
    useFetchAboutMeData();

  return (
    <div className="relative flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-6 max-w-full overflow-clip">
      {isError || isLoading ? (
        <>
          <ContentProgress
            status={isError ? PROGRESS_STATUS.ERROR : PROGRESS_STATUS.LOADING}
            color={colorVariant}
            sizeClass="min-w-48 h-48 rounded-full"
          />

          <div className="inline-flex flex-col gap-4 min-w-[800px] w-full">
            {Array.from({ length: 5 }, () => (
              <ContentProgress
                key={uuid()}
                status={
                  isError ? PROGRESS_STATUS.ERROR : PROGRESS_STATUS.LOADING
                }
                color={colorVariant}
                sizeClass="inline w-full h-4 rounded-sm"
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <img
            className={twMerge(
              "w-48 h-48 object-cover rounded-full border-4 border-dashed",
              BORDER_COLORS_CLASSES?.[colorVariant]
            )}
            loading="eager"
            src={avatarSorce}
            alt={avatarAlt}
            width={1008}
            height={1018}
          />

          <p className="lg:min-w-[calc(100%_-_54rem)] text-center sm:text-start">
            {text}
          </p>
        </>
      )}
    </div>
  );
};

export { AboutMe };
