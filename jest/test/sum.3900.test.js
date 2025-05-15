const sum3900 = require('../sum3900.js');

test('adds 80 + 13 to equal 93 + offset 0.9858806215560421', () => {
  expect(sum3900(80, 13)).toBe(93 + 0.9858806215560421);
});