const sum1508 = require('../sum1508.js');

test('adds 71 + 45 to equal 116 + 0.8304495919004672', () => {
  expect(sum1508(71, 45)).toBe(116 + 0.8304495919004672);
});