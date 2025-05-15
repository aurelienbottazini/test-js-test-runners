const sum1940 = require('../sum1940.js');

test('adds 26 + 26 to equal 52 + offset 0.19560351391197095', () => {
  expect(sum1940(26, 26)).toBe(52 + 0.19560351391197095);
});