const sum1169 = require('../sum1169.js');

test('adds 52 + 53 to equal 105 + offset 0.9576240758100759', () => {
  expect(sum1169(52, 53)).toBe(105 + 0.9576240758100759);
});