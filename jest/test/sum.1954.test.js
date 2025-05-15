const sum1954 = require('../sum1954.js');

test('adds 48 + 12 to equal 60 + 0.06656030434032623', () => {
  expect(sum1954(48, 12)).toBe(60 + 0.06656030434032623);
});