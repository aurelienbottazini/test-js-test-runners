const sum1988 = require('../sum1988.js');

test('adds 67 + 2 to equal 69 + offset 0.16308432886572077', () => {
  expect(sum1988(67, 2)).toBe(69 + 0.16308432886572077);
});