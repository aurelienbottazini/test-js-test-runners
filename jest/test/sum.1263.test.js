const sum1263 = require('../sum1263.js');

test('adds 75 + 58 to equal 133 + 0.003075759848100601', () => {
  expect(sum1263(75, 58)).toBe(133 + 0.003075759848100601);
});