const sum1439 = require('../sum1439.js');

test('adds 2 + 36 to equal 38 + offset 0.16515057626986251', () => {
  expect(sum1439(2, 36)).toBe(38 + 0.16515057626986251);
});