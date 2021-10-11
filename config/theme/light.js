import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: '#00b7FF',
  primaryDark: '#77d6fc',
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
  font: '#333334',
  fontMark: '#000000',
  fontDark: '#121213',
  background: 'white',
  mainBackground: '#F7F7F7',
  navgroup: '#808080',
  border: 'rgba(0,0,0,0.1)',
  hover: defaultColors.blue,
  shadow: 'none', // defaultColors.black + '11',
  invertImage: 'none',
  brightness: 'brightness(1)',
};

export default {
  colors: colors,
};
