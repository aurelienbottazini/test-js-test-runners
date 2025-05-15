const sum = require('../sum');

test('adds 54 + 54 to equal 108', () => {
  expect(sum(54, 54)).toBe(108);
});