const sum3496 = require('../sum3496.js');

test('adds 35 + 98 to equal 133 + offset 0.6857452466892117', () => {
  expect(sum3496(35, 98)).toBe(133 + 0.6857452466892117);
});