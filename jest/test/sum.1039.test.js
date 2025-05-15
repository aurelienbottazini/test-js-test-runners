const sum1039 = require('../sum1039.js');

test('adds 52 + 12 to equal 64 + offset 0.9672061715788605', () => {
  expect(sum1039(52, 12)).toBe(64 + 0.9672061715788605);
});