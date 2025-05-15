const sum3790 = require('../sum3790.js');

test('adds 29 + 85 to equal 114 + offset 0.34769461144450076', () => {
  expect(sum3790(29, 85)).toBe(114 + 0.34769461144450076);
});