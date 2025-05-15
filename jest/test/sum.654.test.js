const sum654 = require('../sum654.js');

test('adds 7 + 73 to equal 80 + offset 0.14727110204914984', () => {
  expect(sum654(7, 73)).toBe(80 + 0.14727110204914984);
});