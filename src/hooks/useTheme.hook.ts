import React from "react";
import { THEME_MODE } from "../constants";
import { ValueOf } from "../types/utiles";
import { useSearchParams } from "react-router-dom";

type ThemeReturnType = {
    themeMode: ValueOf<typeof THEME_MODE>; 
    themeModeByDefault: ValueOf<typeof THEME_MODE>;
}

const useTheme = (): ThemeReturnType => {
    const [searchParams] = useSearchParams();

    const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(false);
    const [isDefaultDarkTheme, setIsDefaultDarkTheme] = React.useState<boolean>(false);

    const renderCounter = React.useRef<number>(0);

    React.useLayoutEffect(() => {
       const isDarkTheme = 
        localStorage.theme === "dark" 
        || (!("theme" in localStorage) 
            && window.matchMedia("(prefers-color-scheme: dark)").matches
        )

        if (renderCounter.current < 2) {
            setIsDefaultDarkTheme(isDarkTheme ? true : false);
        }

        setIsDarkTheme(isDarkTheme ? true : false);

        renderCounter.current += 1;    
    }, [searchParams])


    return {
        themeMode: isDarkTheme ? THEME_MODE.DARK : THEME_MODE.LIGHT,
        themeModeByDefault: isDefaultDarkTheme ? THEME_MODE.DARK : THEME_MODE.LIGHT
    }
}

export { useTheme };