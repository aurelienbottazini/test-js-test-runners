const sum2530 = require('../sum2530.js');

test('adds 14 + 99 to equal 113 + offset 0.18396377083781912', () => {
  expect(sum2530(14, 99)).toBe(113 + 0.18396377083781912);
});