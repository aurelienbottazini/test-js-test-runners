const sum1258 = require('../sum1258.js');

test('adds 67 + 57 to equal 124 + offset 0.533603511372726', () => {
  expect(sum1258(67, 57)).toBe(124 + 0.533603511372726);
});