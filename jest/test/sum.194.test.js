const sum194 = require('../sum194.js');

test('adds 79 + 70 to equal 149 + offset 0.32975639924901035', () => {
  expect(sum194(79, 70)).toBe(149 + 0.32975639924901035);
});