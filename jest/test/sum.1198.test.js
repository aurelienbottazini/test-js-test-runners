const sum1198 = require('../sum1198.js');

test('adds 10 + 44 to equal 54 + offset 0.36279275480468876', () => {
  expect(sum1198(10, 44)).toBe(54 + 0.36279275480468876);
});