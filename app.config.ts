export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'stone',
    },
    button: {
      defaultVariants: {
        variant: 'ghost',
        color: 'primary',
      },
    },
    input: {
      defaultVariants: {
        variant: 'outline',
        color: 'neutral',
      },
    },
    select: {
      defaultVariants: {
        variant: 'outline',
        color: 'neutral',
      },
    },
    card: {
      defaultVariants: {
        variant: 'outline',
      },
    },
  },
})