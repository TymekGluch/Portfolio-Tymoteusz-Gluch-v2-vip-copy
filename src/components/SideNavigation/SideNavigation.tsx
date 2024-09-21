import React from "react";
import { resolvedSideNavigationLink } from "./SideNavigation.data";
import { Technologies } from "../domain/homePage/Technologies";
import {
  TECHNOLOGIES_HEADING,
  TECHNOLOGIES_VARIANT,
} from "../domain/homePage/Technologies/Technologies.constants";

const SideNavigation: React.FC = () => {
  return (
    <div className="col-span-3 hidden lg:flex">
      <div className="sticky top-[89px] flex flex-col justify-between align-middle w-full h-[calc(100vh_-_6rem)]">
        <nav className="flex flex-col items-center w-full">
          <ul className="flex flex-col justify-center align-middle gap-2 w-min">
            {resolvedSideNavigationLink.map(({ name }) => (
              <li
                key={name}
                className="flex justify-start items-center gap-3 text-accentColor-tertiary">
                <span className="w-2 h-2 block rounded-full bg-accentColor-tertiary" />

                <p className="text-nowrap text-xl">{name}</p>
              </li>
            ))}
          </ul>
        </nav>

        <Technologies
          variant={TECHNOLOGIES_VARIANT.SIDE_NAVIGATION}
          headingTag={TECHNOLOGIES_HEADING.H2}
        />
      </div>
    </div>
  );
};

export { SideNavigation };
