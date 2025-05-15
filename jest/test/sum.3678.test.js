const sum3678 = require('../sum3678.js');

test('adds 58 + 27 to equal 85 + offset 0.5572085826181197', () => {
  expect(sum3678(58, 27)).toBe(85 + 0.5572085826181197);
});