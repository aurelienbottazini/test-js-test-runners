const sum2595 = require('../sum2595.js');

test('adds 53 + 88 to equal 141 + offset 0.2706581511403837', () => {
  expect(sum2595(53, 88)).toBe(141 + 0.2706581511403837);
});