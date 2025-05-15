const sum4780 = require('../sum4780.js');

test('adds 95 + 0 to equal 95 + 0.1393915198746859', () => {
  expect(sum4780(95, 0)).toBe(95 + 0.1393915198746859);
});