const sum2032 = require('../sum2032.js');

test('adds 24 + 23 to equal 47 + offset 0.5732478577426141', () => {
  expect(sum2032(24, 23)).toBe(47 + 0.5732478577426141);
});