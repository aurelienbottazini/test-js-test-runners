const sum1219 = require('../sum1219.js');

test('adds 37 + 34 to equal 71 + offset 0.7802014124974461', () => {
  expect(sum1219(37, 34)).toBe(71 + 0.7802014124974461);
});