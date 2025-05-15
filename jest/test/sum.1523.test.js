const sum1523 = require('../sum1523.js');

test('adds 5 + 42 to equal 47 + offset 0.6004463414593715', () => {
  expect(sum1523(5, 42)).toBe(47 + 0.6004463414593715);
});