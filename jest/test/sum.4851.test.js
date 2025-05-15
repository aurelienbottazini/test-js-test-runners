const sum4851 = require('../sum4851.js');

test('adds 14 + 3 to equal 17 + offset 0.997836211150271', () => {
  expect(sum4851(14, 3)).toBe(17 + 0.997836211150271);
});