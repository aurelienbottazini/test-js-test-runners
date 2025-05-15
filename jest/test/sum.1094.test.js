const sum1094 = require('../sum1094.js');

test('adds 37 + 86 to equal 123 + offset 0.15759069694634498', () => {
  expect(sum1094(37, 86)).toBe(123 + 0.15759069694634498);
});