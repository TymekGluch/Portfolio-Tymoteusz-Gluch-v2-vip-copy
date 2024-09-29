import {
  ITEM_VISIBILITY_DEVICE,
  navigationLinks,
  onlyMobileLinks,
} from "./MainNavigation.data";
import classNames from "classnames";
import { Switch } from "../Switch";
import MoonIcon from "../../assets/icons/moon.svg?react";
import SunIcon from "../../assets/icons/sun.svg?react";
import { useSearchParams } from "react-router-dom";
import { Link } from "../Link";
import { COLOR_VARIANT, THEME_MODE } from "../../constants";
import { useHandleOutsideClick, useTheme } from "../../hooks";
import React from "react";

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { themeMode } = useTheme();

  const isLightTheme = themeMode === THEME_MODE.LIGHT;

  const listRef = React.useRef<HTMLUListElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  useHandleOutsideClick([listRef, buttonRef], () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);

      document.documentElement.classList.remove("overflow-y-clip");
    }
  });

  const menuButtonDescription = isMenuOpen ? "close menu" : "open menu";

  const handleMenu = () => {
    if (isMenuOpen) {
      document.documentElement.classList.remove("overflow-y-clip");
    } else {
      document.documentElement.classList.add("overflow-y-clip");
    }

    setIsMenuOpen((prev) => !prev);
  };

  const handleThemeChange = () => {
    const theme: string | null = localStorage.getItem("theme");

    if (theme !== "light") {
      searchParams.set("theme", "light");

      setSearchParams(searchParams);

      localStorage.setItem("theme", "light");

      return;
    }
    searchParams.set("theme", "dark");

    setSearchParams(searchParams);

    localStorage.setItem("theme", "dark");
  };

  return (
    <nav className="fixed lg:static top-0 left-0  self-center flex justify-center items-center w-screen px-6 lg:px-12 bg-backgroundColor-primary bg-opacity-80 shadow-md-inner z-50">
      <div className="flex justify-between items-center w-full max-w-screen-2xl h-16">
        <a
          href="/"
          className="flex justify-center items-center size-12"
          title="Go home"
          aria-label="Go home">
          <h1 className="text-2xl font-bold text-accentColor-secondary">
            T<span className="text-xl text-accentColor-tertiary">G</span>
          </h1>
        </a>

        <button
          ref={buttonRef}
          type="button"
          className={classNames(
            "flex lg:hidden justify-center items-center size-12"
          )}
          title={menuButtonDescription}
          aria-label={menuButtonDescription}
          onClick={handleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 fill-accentColor-primary">
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-accentColor-primary">
              <path
                fillRule="evenodd"
                d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        <div
          className={classNames(
            isMenuOpen ? "flex" : "hidden",
            "fixed lg:static left-1/2 bottom-0 lg:flex justify-center items-start lg:items-center w-screen lg:w-fit h-[calc(100dvh_-_4rem)] lg:h-fit bg-backgroundColor-primary lg:bg-transparent bg-opacity-80 lg:bg-opacity-100 transform -translate-x-1/2 lg:transform-none"
          )}>
          <ul
            ref={listRef}
            className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 w-fit p-10 lg:p-0 mt-[15vh] lg:m-0 bg-backgroundColor-primary lg:bg-transparent border-solid border border-accentColor-secondary lg:border-none rounded-lg lg:rounded-none shadow-variant-3-md-inner lg:shadow-none">
            {navigationLinks.map((current, index, array) => {
              const isLastItem = index === array.length - 1;

              return (
                <li
                  key={current.name}
                  className={classNames(
                    "flex flex-col lg:flex-row gap-4 w-full",
                    current.deviceVisibility ===
                      ITEM_VISIBILITY_DEVICE.MOBILE && "lg:hidden",
                    !onlyMobileLinks
                      .map(({ name }) => name)
                      .includes(current.name) && "lg:hidden"
                  )}>
                  <Link.anchor
                    href={current.anchor}
                    onClick={handleMenu}
                    uppercase
                    colorVariant={
                      isLastItem ? COLOR_VARIANT.PRIMARY : COLOR_VARIANT.DEFAULT
                    }>
                    {current.name}
                  </Link.anchor>

                  {isLastItem && (
                    <span className="block lg:hidden w-full h-px bg-accentColor-secondary shadow-variant-3-md" />
                  )}
                </li>
              );
            })}

            <li>
              <Switch
                idleIcon={<MoonIcon />}
                triggeredIcon={<SunIcon />}
                idleText="dark"
                triggeredText="light"
                className="mt-3 lg:m-0"
                onChange={handleThemeChange}
                defaultChecked={isLightTheme}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { MainNavigation };
