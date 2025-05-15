const sum3451 = require('../sum3451.js');

test('adds 38 + 83 to equal 121 + offset 0.30212545036339045', () => {
  expect(sum3451(38, 83)).toBe(121 + 0.30212545036339045);
});