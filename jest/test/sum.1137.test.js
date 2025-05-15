const sum1137 = require('../sum1137.js');

test('adds 50 + 52 to equal 102 + 0.12261844937647648', () => {
  expect(sum1137(50, 52)).toBe(102 + 0.12261844937647648);
});