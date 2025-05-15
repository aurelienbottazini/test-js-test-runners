const sum1050 = require('../sum1050.js');

test('adds 36 + 71 to equal 107 + offset 0.15549597707759477', () => {
  expect(sum1050(36, 71)).toBe(107 + 0.15549597707759477);
});