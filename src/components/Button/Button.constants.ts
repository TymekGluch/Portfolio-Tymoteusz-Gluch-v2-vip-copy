const BUTTON_SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
} as const 

const BUTTON_VARIANTS = {
    OUTLINED: 'outlined',
    FILLED: 'filled',
} as const

const BUTTON_SIZES_ClASSES = {
    [BUTTON_SIZES.SMALL]: 'px-4 py-1 text-sm',
    [BUTTON_SIZES.MEDIUM]: 'px-5 py-[0.375rem] text-base',
    [BUTTON_SIZES.LARGE]: 'px-6 py-2 text-lg'
}

export { BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_SIZES_ClASSES}