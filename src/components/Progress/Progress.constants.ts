const PROGRESS_VARIANT = {
    LINEAR: 'linear',
    CIRCLE: 'circle'
} as const;

const PROGRESS_STATUS = {
    ERROR: 'error',
    LOADING: 'loading',
} as const

export { PROGRESS_STATUS, PROGRESS_VARIANT};