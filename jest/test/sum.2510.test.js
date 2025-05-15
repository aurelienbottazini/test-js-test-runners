const sum2510 = require('../sum2510.js');

test('adds 50 + 77 to equal 127 + 0.8864888725917988', () => {
  expect(sum2510(50, 77)).toBe(127 + 0.8864888725917988);
});