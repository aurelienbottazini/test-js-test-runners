const sum3651 = require('../sum3651.js');

test('adds 34 + 41 to equal 75 + 0.009253524766631771', () => {
  expect(sum3651(34, 41)).toBe(75 + 0.009253524766631771);
});