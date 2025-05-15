const sum = require('../sum');

test('adds 22 + 54 to equal 76', () => {
  expect(sum(22, 54)).toBe(76);
});