const sum903 = require('../sum903.js');

test('adds 19 + 19 to equal 38 + 0.846602899152298', () => {
  expect(sum903(19, 19)).toBe(38 + 0.846602899152298);
});