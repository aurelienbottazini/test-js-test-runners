const sum1955 = require('../sum1955.js');

test('adds 35 + 5 to equal 40 + 0.9575991185669018', () => {
  expect(sum1955(35, 5)).toBe(40 + 0.9575991185669018);
});