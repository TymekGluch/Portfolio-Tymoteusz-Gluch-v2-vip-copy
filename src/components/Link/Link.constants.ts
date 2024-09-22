const LINK_VARIANT = {
    DEFAULT: 'default',
    LIST_ITEM: 'listItem'
} as const 

const PSEUDO_CLASS_VARIANT = {
    [LINK_VARIANT.DEFAULT]: `before:content-none after:content-[''] after:hidden hover:after:block focus:after:block after:w-2 after:h-3/5 after:absolute after:right-2 after:animate-[pulse_0.75s_ease-in-out_infinite]`,
    [LINK_VARIANT.LIST_ITEM]: `after:content-none content-[''] before:w-2 before:h-2 before:rounded-full hover:before:animate-[pulse_0.75s_ease-in-out_infinite] focus:before:animate-[pulse_0.75s_ease-in-out_infinite]`
  }

  export { LINK_VARIANT, PSEUDO_CLASS_VARIANT }