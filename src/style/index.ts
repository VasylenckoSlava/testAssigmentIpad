import filter from 'lodash/filter';

const fonts = {
  main: 'Bariol-Bold',
};

const colors = {
  primary: '#fcc844',
  white: '#ffffff',
  firstCharacter: '#73c0d1',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  tooltipBackgroundColor: '#edecec',
  tooltipTextColor: '#505068',
};

const fontSizes = {
  bigInt: 95,
  middleInt: 30,
};

function mergeStyles(...styles) {
  if (styles.length === 1) {
    return styles[0];
  }
  let result = filter(styles, (style) => style !== undefined && style !== null);
  return result;
}

export {colors, fontSizes, fonts, mergeStyles};
