const sum2833 = require('../sum2833.js');

test('adds 75 + 74 to equal 149 + offset 0.8495430533395452', () => {
  expect(sum2833(75, 74)).toBe(149 + 0.8495430533395452);
});