const sum3523 = require('../sum3523.js');

test('adds 51 + 64 to equal 115 + 0.3100942860605024', () => {
  expect(sum3523(51, 64)).toBe(115 + 0.3100942860605024);
});