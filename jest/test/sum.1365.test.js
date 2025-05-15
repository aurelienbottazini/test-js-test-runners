const sum1365 = require('../sum1365.js');

test('adds 31 + 61 to equal 92 + 0.757086830939829', () => {
  expect(sum1365(31, 61)).toBe(92 + 0.757086830939829);
});