const sum2955 = require('../sum2955.js');

test('adds 72 + 34 to equal 106 + offset 0.5007688316193087', () => {
  expect(sum2955(72, 34)).toBe(106 + 0.5007688316193087);
});