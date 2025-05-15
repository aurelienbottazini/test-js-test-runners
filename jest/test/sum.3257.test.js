const sum3257 = require('../sum3257.js');

test('adds 58 + 47 to equal 105 + offset 0.527284314101039', () => {
  expect(sum3257(58, 47)).toBe(105 + 0.527284314101039);
});