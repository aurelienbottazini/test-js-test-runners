const sum2720 = require('../sum2720.js');

test('adds 49 + 74 to equal 123 + 0.40904529856907235', () => {
  expect(sum2720(49, 74)).toBe(123 + 0.40904529856907235);
});