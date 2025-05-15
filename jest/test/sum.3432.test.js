const sum3432 = require('../sum3432.js');

test('adds 45 + 94 to equal 139 + 0.33903406022190286', () => {
  expect(sum3432(45, 94)).toBe(139 + 0.33903406022190286);
});