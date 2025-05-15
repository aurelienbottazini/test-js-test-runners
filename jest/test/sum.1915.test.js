const sum1915 = require('../sum1915.js');

test('adds 75 + 26 to equal 101 + offset 0.6668974379153176', () => {
  expect(sum1915(75, 26)).toBe(101 + 0.6668974379153176);
});