const sum2530 = require('../sum2530.js');

test('adds 77 + 78 to equal 155 + 0.5048504540854304', () => {
  expect(sum2530(77, 78)).toBe(155 + 0.5048504540854304);
});