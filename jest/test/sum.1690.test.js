const sum1690 = require('../sum1690.js');

test('adds 38 + 58 to equal 96 + 0.1579726773375527', () => {
  expect(sum1690(38, 58)).toBe(96 + 0.1579726773375527);
});