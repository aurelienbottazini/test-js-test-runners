const sum2382 = require('../sum2382.js');

test('adds 89 + 59 to equal 148 + offset 0.3958832146128761', () => {
  expect(sum2382(89, 59)).toBe(148 + 0.3958832146128761);
});