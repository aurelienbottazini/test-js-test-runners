const sum2373 = require('../sum2373.js');

test('adds 67 + 74 to equal 141 + 0.3888007958991341', () => {
  expect(sum2373(67, 74)).toBe(141 + 0.3888007958991341);
});