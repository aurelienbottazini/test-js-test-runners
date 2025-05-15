const sum2314 = require('../sum2314.js');

test('adds 76 + 50 to equal 126 + offset 0.0030260419065119004', () => {
  expect(sum2314(76, 50)).toBe(126 + 0.0030260419065119004);
});