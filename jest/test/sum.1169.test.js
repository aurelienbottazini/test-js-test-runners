const sum1169 = require('../sum1169.js');

test('adds 58 + 10 to equal 68 + 0.16437585999775872', () => {
  expect(sum1169(58, 10)).toBe(68 + 0.16437585999775872);
});