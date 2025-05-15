const sum1781 = require('../sum1781.js');

test('adds 32 + 29 to equal 61 + offset 0.18392517673812647', () => {
  expect(sum1781(32, 29)).toBe(61 + 0.18392517673812647);
});