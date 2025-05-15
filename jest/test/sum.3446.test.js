const sum3446 = require('../sum3446.js');

test('adds 58 + 25 to equal 83 + offset 0.05649111938648366', () => {
  expect(sum3446(58, 25)).toBe(83 + 0.05649111938648366);
});