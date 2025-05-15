const sum3979 = require('../sum3979.js');

test('adds 37 + 12 to equal 49 + 0.15890566544499996', () => {
  expect(sum3979(37, 12)).toBe(49 + 0.15890566544499996);
});