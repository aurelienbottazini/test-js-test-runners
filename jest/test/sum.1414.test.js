const sum1414 = require('../sum1414.js');

test('adds 82 + 25 to equal 107 + 0.04181320617035378', () => {
  expect(sum1414(82, 25)).toBe(107 + 0.04181320617035378);
});