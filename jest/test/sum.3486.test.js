const sum3486 = require('../sum3486.js');

test('adds 58 + 0 to equal 58 + 0.9545088264604629', () => {
  expect(sum3486(58, 0)).toBe(58 + 0.9545088264604629);
});