const sum1899 = require('../sum1899.js');

test('adds 15 + 82 to equal 97 + 0.6837073957363846', () => {
  expect(sum1899(15, 82)).toBe(97 + 0.6837073957363846);
});