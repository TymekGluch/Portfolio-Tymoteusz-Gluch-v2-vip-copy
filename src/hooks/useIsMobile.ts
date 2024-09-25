import React from "react"
import { BREAKPOINTS_MIN_KEYS } from "../constants/breakpoints.constants"

const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = React.useState<boolean>(true)

    React.useEffect(() => {
        const mediaQuery = window.matchMedia(BREAKPOINTS_MIN_KEYS.SMALL_DESKTOP)
        const handleResize = (event: MediaQueryListEvent) => setIsMobile(!event.matches)

        mediaQuery.addEventListener('change', handleResize)

        return () => {
          mediaQuery.removeEventListener('change', handleResize)
        }
    }, [])

  return isMobile
}

export { useIsMobile }
