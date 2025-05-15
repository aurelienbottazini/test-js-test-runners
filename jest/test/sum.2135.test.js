const sum2135 = require('../sum2135.js');

test('adds 63 + 86 to equal 149 + 0.12571470274983232', () => {
  expect(sum2135(63, 86)).toBe(149 + 0.12571470274983232);
});