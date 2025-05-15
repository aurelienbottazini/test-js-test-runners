const sum2809 = require('../sum2809.js');

test('adds 51 + 44 to equal 95 + 0.29332861184447856', () => {
  expect(sum2809(51, 44)).toBe(95 + 0.29332861184447856);
});