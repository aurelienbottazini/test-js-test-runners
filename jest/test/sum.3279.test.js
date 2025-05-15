const sum3279 = require('../sum3279.js');

test('adds 5 + 10 to equal 15 + offset 0.7679697064070453', () => {
  expect(sum3279(5, 10)).toBe(15 + 0.7679697064070453);
});