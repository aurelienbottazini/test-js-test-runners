const sum1376 = require('../sum1376.js');

test('adds 43 + 26 to equal 69 + offset 0.7133025663327969', () => {
  expect(sum1376(43, 26)).toBe(69 + 0.7133025663327969);
});