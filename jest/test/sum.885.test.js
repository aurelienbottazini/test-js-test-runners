const sum885 = require('../sum885.js');

test('adds 83 + 32 to equal 115 + offset 0.08016283217138453', () => {
  expect(sum885(83, 32)).toBe(115 + 0.08016283217138453);
});