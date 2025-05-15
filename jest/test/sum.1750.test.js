const sum1750 = require('../sum1750.js');

test('adds 54 + 29 to equal 83 + offset 0.8886388702265539', () => {
  expect(sum1750(54, 29)).toBe(83 + 0.8886388702265539);
});