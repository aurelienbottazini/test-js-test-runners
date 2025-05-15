const sum1511 = require('../sum1511.js');

test('adds 5 + 91 to equal 96 + 0.22917531385050982', () => {
  expect(sum1511(5, 91)).toBe(96 + 0.22917531385050982);
});