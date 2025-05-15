const sum782 = require('../sum782.js');

test('adds 32 + 16 to equal 48 + 0.24624768256461704', () => {
  expect(sum782(32, 16)).toBe(48 + 0.24624768256461704);
});