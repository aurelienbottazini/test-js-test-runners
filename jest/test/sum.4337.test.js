const sum4337 = require('../sum4337.js');

test('adds 30 + 91 to equal 121 + 0.3353286909788543', () => {
  expect(sum4337(30, 91)).toBe(121 + 0.3353286909788543);
});