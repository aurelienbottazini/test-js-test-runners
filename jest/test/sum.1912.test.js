const sum1912 = require('../sum1912.js');

test('adds 34 + 3 to equal 37 + 0.9784084137300284', () => {
  expect(sum1912(34, 3)).toBe(37 + 0.9784084137300284);
});