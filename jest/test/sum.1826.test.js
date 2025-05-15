const sum1826 = require('../sum1826.js');

test('adds 82 + 36 to equal 118 + offset 0.12250167899297892', () => {
  expect(sum1826(82, 36)).toBe(118 + 0.12250167899297892);
});