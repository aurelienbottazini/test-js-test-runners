const sum3242 = require('../sum3242.js');

test('adds 28 + 48 to equal 76 + offset 0.1665131852448235', () => {
  expect(sum3242(28, 48)).toBe(76 + 0.1665131852448235);
});