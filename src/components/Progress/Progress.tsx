import React from "react";
import { ValueOf } from "../../types/utiles";
import { PROGRESS_STATUS, PROGRESS_VARIANT } from "./Progress.constants";
import { COLOR_VARIANT } from "../../constants";
import classNames from "classnames";
import { getBagroundVariant } from "../../utilities";

type ProgressProps = {
  status?: ValueOf<typeof PROGRESS_STATUS>;
  color?: ValueOf<typeof COLOR_VARIANT>;
  variant: ValueOf<typeof PROGRESS_VARIANT>;
};

type ClassAtributeType = {
  sizeClass?: string;
};

type ContentProgressProps = Omit<ProgressProps, "variant"> & ClassAtributeType;

const Progress: React.FC<ProgressProps> = ({
  status = PROGRESS_STATUS.LOADING,
  color = COLOR_VARIANT.DEFAULT,
  variant,
}) => {
  if (variant === PROGRESS_VARIANT.LINEAR) {
    return (
      <div
        className={classNames(
          "relative w-full h-1 bg-opacity-50 overflow-clip",
          getBagroundVariant(color)
        )}>
        <div
          className={classNames(
            getBagroundVariant(color),
            "absolute w-1/2 h-1 animate-linearProgress"
          )}
        />
      </div>
    );
  } else return null;
};

const ContentProgress: React.FC<ContentProgressProps> = ({
  status = PROGRESS_STATUS.LOADING,
  color = COLOR_VARIANT.DEFAULT,
  sizeClass,
}) => {
  const background =
    status === PROGRESS_STATUS.ERROR ? "bg-red-500" : getBagroundVariant(color);

  return (
    <div
      className={classNames(
        "block animate-pulse bg-opacity-50",
        background,
        sizeClass ? sizeClass : ""
      )}
    />
  );
};

export { Progress, ContentProgress };
