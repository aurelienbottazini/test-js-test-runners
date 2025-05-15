const sum1950 = require('../sum1950.js');

test('adds 37 + 88 to equal 125 + 0.21403688580498093', () => {
  expect(sum1950(37, 88)).toBe(125 + 0.21403688580498093);
});