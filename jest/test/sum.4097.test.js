const sum = require('../sum');

test('adds 95 + 54 to equal 149', () => {
  expect(sum(95, 54)).toBe(149);
});