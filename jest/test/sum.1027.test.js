const sum1027 = require('../sum1027.js');

test('adds 2 + 37 to equal 39 + 0.5794739492097729', () => {
  expect(sum1027(2, 37)).toBe(39 + 0.5794739492097729);
});