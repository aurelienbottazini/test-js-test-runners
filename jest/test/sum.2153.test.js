const sum2153 = require('../sum2153.js');

test('adds 73 + 12 to equal 85 + offset 0.6882693965062467', () => {
  expect(sum2153(73, 12)).toBe(85 + 0.6882693965062467);
});