const sum1483 = require('../sum1483.js');

test('adds 8 + 41 to equal 49 + 0.5644086511815277', () => {
  expect(sum1483(8, 41)).toBe(49 + 0.5644086511815277);
});