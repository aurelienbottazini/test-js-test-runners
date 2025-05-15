const sum1797 = require('../sum1797.js');

test('adds 18 + 71 to equal 89 + offset 0.8736583325652607', () => {
  expect(sum1797(18, 71)).toBe(89 + 0.8736583325652607);
});