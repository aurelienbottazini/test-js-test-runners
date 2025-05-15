const sum3871 = require('../sum3871.js');

test('adds 78 + 11 to equal 89 + offset 0.831787706919706', () => {
  expect(sum3871(78, 11)).toBe(89 + 0.831787706919706);
});