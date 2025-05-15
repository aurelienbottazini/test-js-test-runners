const sum1663 = require('../sum1663.js');

test('adds 25 + 7 to equal 32 + 0.5521255581051926', () => {
  expect(sum1663(25, 7)).toBe(32 + 0.5521255581051926);
});