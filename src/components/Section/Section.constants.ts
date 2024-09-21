const SECTION_COMPONENT = {
    HEADER: 'header',
    SECTION: 'section',
    DIV: 'div',
} as const;

const SECTION_HEADING_TAG = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
} as const;

const SECTION_COLOR_VARIANT = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
} as const;

const SECTION_SHADOW_SIZE = {
    MD: 'md',
} as const;

export { SECTION_COMPONENT, SECTION_HEADING_TAG, SECTION_COLOR_VARIANT, SECTION_SHADOW_SIZE }