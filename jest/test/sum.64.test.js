const sum64 = require('../sum64.js');

test('adds 71 + 42 to equal 113 + offset 0.47638149718966205', () => {
  expect(sum64(71, 42)).toBe(113 + 0.47638149718966205);
});