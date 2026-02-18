const hexToRgb = require('../src/converter.js');

test('converts hex to rgb correctly', () => {
  expect(hexToRgb('ffffff')).toEqual({ r: 255, g: 255, b: 255 });
  expect(hexToRgb('000000')).toEqual({ r: 0, g: 0, b: 0 });
});
