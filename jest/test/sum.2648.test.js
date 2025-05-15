const sum2648 = require('../sum2648.js');

test('adds 15 + 90 to equal 105 + offset 0.8962429966487555', () => {
  expect(sum2648(15, 90)).toBe(105 + 0.8962429966487555);
});