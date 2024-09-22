import React from "react";
import { resolvedSideNavigationLink } from "./SideNavigation.data";
import { Technologies } from "../domain/homePage/Technologies";
import {
  TECHNOLOGIES_HEADING,
  TECHNOLOGIES_VARIANT,
} from "../domain/homePage/Technologies/Technologies.constants";
import { Link } from "../Link";
import { LINK_VARIANT } from "../Link/Link.constants";
import { COLOR_VARIANT } from "../../constants";

const SideNavigation: React.FC = () => {
  return (
    <div className="col-span-3 hidden lg:flex">
      <div className="sticky top-[89px] flex flex-col justify-between align-middle w-full h-[calc(100vh_-_6rem)]">
        <nav className="flex flex-col items-center w-full">
          <ul className="flex flex-col justify-center align-middle gap-2 w-min">
            {resolvedSideNavigationLink.map(({ name, anchor }) => (
              <li
                key={name}
                className="flex justify-start items-center gap-3 text-accentColor-tertiary">
                <Link.anchor
                  href={anchor}
                  variant={LINK_VARIANT.LIST_ITEM}
                  colorVariant={COLOR_VARIANT.TERTIARY}>
                  {name}
                </Link.anchor>
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
