const sum1936 = require('../sum1936.js');

test('adds 51 + 40 to equal 91 + offset 0.9814522341209356', () => {
  expect(sum1936(51, 40)).toBe(91 + 0.9814522341209356);
});