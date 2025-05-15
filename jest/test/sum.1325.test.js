const sum1325 = require('../sum1325.js');

test('adds 76 + 75 to equal 151 + offset 0.6812361096286733', () => {
  expect(sum1325(76, 75)).toBe(151 + 0.6812361096286733);
});