const CARERRE_HEADING_VARIANT = {
H1: 'h1',
H2: 'h2',
H3: 'h3',
H4: 'h4',
H5: 'h5',
} as const;

const opacityArray = [
    'opacity-15',
    'opacity-30',
    'opacity-45',
    'opacity-60',
    'opacity-85',
    'opacity-100,',
    'opacity-80',
    'opacity-60',
    'opacity-30',
    'opacity-20',
    'opacity-10',
]

const CARERRE_TIMELINE_VARIANT = {
    SQUERE: 'squere',
    CIRCLE: 'circle'
} as const

export { CARERRE_HEADING_VARIANT, CARERRE_TIMELINE_VARIANT, opacityArray }