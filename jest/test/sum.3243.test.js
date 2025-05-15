const sum3243 = require('../sum3243.js');

test('adds 37 + 7 to equal 44 + 0.3071404713752409', () => {
  expect(sum3243(37, 7)).toBe(44 + 0.3071404713752409);
});