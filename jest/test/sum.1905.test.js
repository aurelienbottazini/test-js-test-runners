const sum1905 = require('../sum1905.js');

test('adds 21 + 40 to equal 61 + offset 0.058185615101154275', () => {
  expect(sum1905(21, 40)).toBe(61 + 0.058185615101154275);
});