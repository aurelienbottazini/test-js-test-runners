const sum379 = require('../sum379.js');

test('adds 16 + 14 to equal 30 + offset 0.9693305451900958', () => {
  expect(sum379(16, 14)).toBe(30 + 0.9693305451900958);
});