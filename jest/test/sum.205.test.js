const sum205 = require('../sum205.js');

test('adds 42 + 16 to equal 58 + offset 0.1642989418841747', () => {
  expect(sum205(42, 16)).toBe(58 + 0.1642989418841747);
});