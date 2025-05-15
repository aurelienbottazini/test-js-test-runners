const sum2432 = require('../sum2432.js');

test('adds 58 + 9 to equal 67 + 0.004622757661879473', () => {
  expect(sum2432(58, 9)).toBe(67 + 0.004622757661879473);
});