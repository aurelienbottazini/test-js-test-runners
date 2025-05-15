const sum1811 = require('../sum1811.js');

test('adds 2 + 77 to equal 79 + 0.7581470020932156', () => {
  expect(sum1811(2, 77)).toBe(79 + 0.7581470020932156);
});