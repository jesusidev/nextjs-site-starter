import { extendTheme, theme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { colors, fonts } from './default';

const breakpoints = createBreakpoints({
  xl: '1366px',
  lg: '1024px',
  md: '768px',
  sm: '481px',
});

const customTheme = extendTheme({
  ...theme,
  breakpoints,
  colors: {
    ...theme.colors,
    ...colors,
  },
  fonts: {
    heading: fonts.secondary,
    body: fonts.primary,
    ...fonts,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '15px',
    reg: '17px',
    lg: '20px',
    xl: '22px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '40px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeight: {
    thin: 200,
    normal: 400,
    medium: 500,
    bold: 700,
  },
});

export default customTheme;
