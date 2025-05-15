const sum3440 = require('../sum3440.js');

test('adds 61 + 9 to equal 70 + 0.39626656552969', () => {
  expect(sum3440(61, 9)).toBe(70 + 0.39626656552969);
});