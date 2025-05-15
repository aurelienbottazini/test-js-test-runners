const sum2091 = require('../sum2091.js');

test('adds 4 + 31 to equal 35 + 0.9111872525740343', () => {
  expect(sum2091(4, 31)).toBe(35 + 0.9111872525740343);
});