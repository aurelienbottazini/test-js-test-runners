const sum = require('../sum');

test('adds 49 + 54 to equal 103', () => {
  expect(sum(49, 54)).toBe(103);
});