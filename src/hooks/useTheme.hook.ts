import React from "react";
import { THEME_MODE } from "../constants";
import { ValueOf } from "../types/utiles";
import { useSearchParams } from "react-router-dom";

type ThemeReturnType = {
    themeMode: ValueOf<typeof THEME_MODE>; 
    themeModeByDefault: ValueOf<typeof THEME_MODE>;
}

type ThemeStateType = {
    isDarkTheme: boolean;
    isDefaultDarkTheme: boolean;
}

const defultThemeState: ThemeStateType = {
    isDarkTheme: false,
    isDefaultDarkTheme: false
}

const useTheme = (): ThemeReturnType => {
    const [searchParams] = useSearchParams();
    const [theme, setTheme] = React.useState<ThemeStateType>(defultThemeState);

    const renderCounter = React.useRef<number>(0);

    React.useLayoutEffect(() => {
       const isDarkTheme = 
        localStorage.theme === "dark" 
        || (!("theme" in localStorage) 
            && window.matchMedia("(prefers-color-scheme: dark)").matches
        )

        if (renderCounter.current < 1) {
            setTheme({
                isDarkTheme,
                isDefaultDarkTheme: isDarkTheme
            });
        }

        setTheme((prev) => ({...prev, isDarkTheme}));

        renderCounter.current += 1;    
    }, [searchParams])


    return {
        themeMode: theme.isDarkTheme ? THEME_MODE.DARK : THEME_MODE.LIGHT,
        themeModeByDefault: theme.isDefaultDarkTheme ? THEME_MODE.DARK : THEME_MODE.LIGHT
    }
}

export { useTheme };