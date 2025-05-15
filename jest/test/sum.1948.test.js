const sum1948 = require('../sum1948.js');

test('adds 43 + 39 to equal 82 + offset 0.21739175800556032', () => {
  expect(sum1948(43, 39)).toBe(82 + 0.21739175800556032);
});