import React from "react";
import { MainNavigation } from "../MainNavigation";
import { SideNavigation } from "../SideNavigation";
import { useSearchParams } from "react-router-dom";

type LayoutProps = React.PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const themeQueryParam = searchParams.get("theme");

  React.useLayoutEffect(() => {
    const isDarkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkTheme) {
      document.documentElement.classList.add("dark");

      searchParams.set("theme", "dark");

      setSearchParams(searchParams);

      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");

      searchParams.set("theme", "light");

      setSearchParams(searchParams);

      localStorage.setItem("theme", "light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeQueryParam]);

  return (
    <main className="flex justify-center align-middle w-screen min-h-screen lg:px-4">
      <div className="flex flex-col justify-end lg:justify-between align-middle gap-4 w-full max-w-[105rem] min-h-screen border-solid border-px border-textColor-primary">
        <MainNavigation />

        <div className="lg:grid grid-cols-12 gap-4">
          <SideNavigation />

          <div className="col-span-8 flex flex-col items-center gap-10 w-full min-h-[calc(100vh_-_5rem)] lg:min-h-[calc(100vh_-_5.5rem)] p-6 sm:px-12 mt-20 lg:mt-0 lg:mb-2 lg:rounded-2xl border border-solid border-textColor-primary bg-transparent shadow-md-inner">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export { Layout };
