const sum3816 = require('../sum3816.js');

test('adds 12 + 8 to equal 20 + offset 0.09048677861144305', () => {
  expect(sum3816(12, 8)).toBe(20 + 0.09048677861144305);
});