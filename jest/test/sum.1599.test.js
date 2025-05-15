const sum1599 = require('../sum1599.js');

test('adds 70 + 22 to equal 92 + 0.6580153881129308', () => {
  expect(sum1599(70, 22)).toBe(92 + 0.6580153881129308);
});