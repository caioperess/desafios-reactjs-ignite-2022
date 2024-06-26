import { createStitches } from '@stitches/react';

export const {
  theme,
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray900: '#121214',
      gray800: '#202024',
      gray400: '#8D8D99',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',

      black_overlay: 'rgba(0,0,0,0.8)',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
});
