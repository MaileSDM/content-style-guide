import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.sdmHighlight,
  primaryDark: defaultColors.blueDark,
  highlight: {
    tip: {
      font: 'white',
      background: 'black,'
    },
    info: {
      font: 'white',
      background: 'black,'
    },
    warning: {
      font: 'white',
      background: 'black,'
    },
    error: {
      font: 'white',
      background: 'black,'
    },
  },
  font: '#DDDDDD',
  fontMark: '#000000',
  fontDark: '#FFFFFF',
  sdmBlue: '#00b7FF',
  sdmBlueHover: '#77d6fc',
  sdmHighlight: '#e1f0f5',
  background: '#011535',
  mainBackground: '#012345',
  navgroup: '#808080',
  border: 'rgba(255,255,255,0.1)',
  hover: defaultColors.sdmBlue,
  shadow: 'none',
  invertImage: 'brightness(0) invert(1)',
  brightness: 'brightness(1)',
};

export default {
  colors: colors,
};
