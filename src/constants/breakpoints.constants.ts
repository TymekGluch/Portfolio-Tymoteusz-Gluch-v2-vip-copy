const BREAKPOINTS_MIN_KEYS = {
    SMALL_TABLET: '(min-width: 640px)',
    TABLET: '(min-width: 768px)',
    SMALL_DESKTOP: '(min-width: 1024px)',
    DESKTOP: '(min-width: 1280px)',
    LARGE_DESKTOP: '(min-width: 1536px)',
} as const;

const BREAKPOINTS_MAX_KEYS = {
    SMALL_TABLET: '(max-width: 639px)',
    TABLET: '(max-width: 767px)',
    SMALL_DESKTOP: '(max-width: 1023px)',
    DESKTOP: '(max-width: 1279px)',
    LARGE_DESKTOP: '(max-width: 1535px)',
} as const;

export { BREAKPOINTS_MIN_KEYS, BREAKPOINTS_MAX_KEYS }