const sum4224 = require('../sum4224.js');

test('adds 95 + 96 to equal 191 + offset 0.4854831093873079', () => {
  expect(sum4224(95, 96)).toBe(191 + 0.4854831093873079);
});