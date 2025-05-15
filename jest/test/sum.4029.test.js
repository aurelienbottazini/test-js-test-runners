const sum4029 = require('../sum4029.js');

test('adds 59 + 86 to equal 145 + offset 0.401273391114906', () => {
  expect(sum4029(59, 86)).toBe(145 + 0.401273391114906);
});