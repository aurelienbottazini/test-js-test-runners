const sum1386 = require('../sum1386.js');

test('adds 80 + 2 to equal 82 + offset 0.8205522424990149', () => {
  expect(sum1386(80, 2)).toBe(82 + 0.8205522424990149);
});