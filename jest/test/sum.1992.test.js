const sum1992 = require('../sum1992.js');

test('adds 17 + 0 to equal 17 + offset 0.24290562636332358', () => {
  expect(sum1992(17, 0)).toBe(17 + 0.24290562636332358);
});