import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.sdmBlue,
  primaryDark: defaultColors.black,
  highlight: {
    tip: {
      font: 'black',
      background: '#D0EBE1',
    },
    info: {
      font: 'white',
      background: '#CDDFF5',
    },
    warning: {
      font: 'black',
      background: '#FBE9D0',
    },
    error: {
      font: 'black',
      background: '#FAD0DD',
    },
  },
  font: defaultColors.black,
  fontDark: '#121213',
  sdmBlue: '#00b7FF',
  sdmBlueHover: '#77d6fc',
  background: '#FFFFFF',
  mainBackground: '#F7F7F7',
  border: defaultColors.grayLight + '22',
  hover: defaultColors.blue,
  shadow: 'none', // defaultColors.black + '11',
  invertImage: 'none',
  brightness: 'brightness(1)',
};

export default {
  colors: colors,
};
