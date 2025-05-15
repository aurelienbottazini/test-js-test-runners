const sum1695 = require('../sum1695.js');

test('adds 67 + 8 to equal 75 + 0.108493999313935', () => {
  expect(sum1695(67, 8)).toBe(75 + 0.108493999313935);
});