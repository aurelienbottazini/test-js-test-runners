const sum1967 = require('../sum1967.js');

test('adds 61 + 25 to equal 86 + offset 0.3630221488211278', () => {
  expect(sum1967(61, 25)).toBe(86 + 0.3630221488211278);
});