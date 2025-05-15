const sum1165 = require('../sum1165.js');

test('adds 70 + 81 to equal 151 + offset 0.006183314074354906', () => {
  expect(sum1165(70, 81)).toBe(151 + 0.006183314074354906);
});