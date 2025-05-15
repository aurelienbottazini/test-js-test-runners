const sum3308 = require('../sum3308.js');

test('adds 3 + 86 to equal 89 + offset 0.6974809640284605', () => {
  expect(sum3308(3, 86)).toBe(89 + 0.6974809640284605);
});