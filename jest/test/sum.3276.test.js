const sum3276 = require('../sum3276.js');

test('adds 59 + 19 to equal 78 + offset 0.31425845299211264', () => {
  expect(sum3276(59, 19)).toBe(78 + 0.31425845299211264);
});