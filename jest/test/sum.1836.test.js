const sum1836 = require('../sum1836.js');

test('adds 26 + 0 to equal 26 + offset 0.42606033758742745', () => {
  expect(sum1836(26, 0)).toBe(26 + 0.42606033758742745);
});