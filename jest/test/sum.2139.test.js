const sum2139 = require('../sum2139.js');

test('adds 54 + 2 to equal 56 + offset 0.21583124778258544', () => {
  expect(sum2139(54, 2)).toBe(56 + 0.21583124778258544);
});