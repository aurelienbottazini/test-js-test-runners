const sum = require('../sum');

test('adds 86 + 54 to equal 140', () => {
  expect(sum(86, 54)).toBe(140);
});