import React from "react";
import { THEME_MODE } from "../constants";
import { ValueOf } from "../types/utiles";
import { useSearchParams } from "react-router-dom";

type ThemeReturnType = {
    themeMode: ValueOf<typeof THEME_MODE>; 
}

const useTheme = (): ThemeReturnType => {
    const [searchParams] = useSearchParams();
    const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(false);

    React.useLayoutEffect(() => {
       const isDarkTheme = 
        localStorage.theme === "dark" 
        || (!("theme" in localStorage) 
            && window.matchMedia("(prefers-color-scheme: dark)").matches
        )

        setIsDarkTheme(isDarkTheme ? true : false);
            
    }, [searchParams])


    return {
        themeMode: isDarkTheme ? THEME_MODE.DARK : THEME_MODE.LIGHT
    }
}

export { useTheme };