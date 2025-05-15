const sum2421 = require('../sum2421.js');

test('adds 23 + 94 to equal 117 + offset 0.7520988049973736', () => {
  expect(sum2421(23, 94)).toBe(117 + 0.7520988049973736);
});