const sum3583 = require('../sum3583.js');

test('adds 77 + 23 to equal 100 + 0.6427351677551613', () => {
  expect(sum3583(77, 23)).toBe(100 + 0.6427351677551613);
});