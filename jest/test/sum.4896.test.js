const sum4896 = require('../sum4896.js');

test('adds 31 + 47 to equal 78 + offset 0.40974918091700807', () => {
  expect(sum4896(31, 47)).toBe(78 + 0.40974918091700807);
});