import React from "react";
import { useFetchAboutMeData } from "./AboutMe.hooks";
import { ContentProgress } from "../../../Progress";
import { PROGRESS_STATUS } from "../../../Progress/Progress.constants";
import { COLOR_VARIANT } from "../../../../constants";
import { v4 as uuid } from "uuid";

const AboutMe: React.FC = () => {
  const { isError, isLoading, avatarAlt, avatarSorce, text } =
    useFetchAboutMeData();

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-6 max-w-full overflow-clip">
      {isError || isLoading ? (
        <>
          <ContentProgress
            status={isError ? PROGRESS_STATUS.ERROR : PROGRESS_STATUS.LOADING}
            color={COLOR_VARIANT.DEFAULT}
            sizeClass="min-w-48 h-48 rounded-full"
          />

          <div className="inline-flex flex-col gap-4 min-w-[800px] w-full">
            {Array.from({ length: 5 }, () => (
              <ContentProgress
                key={uuid()}
                status={
                  isError ? PROGRESS_STATUS.ERROR : PROGRESS_STATUS.LOADING
                }
                color={COLOR_VARIANT.DEFAULT}
                sizeClass="inline w-full h-4 rounded-sm"
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <img
            className="min-w-48 h-48 object-cover rounded-full border-solid border-4 border-textColor-primary"
            src={avatarSorce}
            alt={avatarAlt}
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
