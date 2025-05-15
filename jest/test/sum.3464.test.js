const sum3464 = require('../sum3464.js');

test('adds 76 + 58 to equal 134 + 0.3100364332878649', () => {
  expect(sum3464(76, 58)).toBe(134 + 0.3100364332878649);
});