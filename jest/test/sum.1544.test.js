const sum = require('../sum');

test('adds 29 + 54 to equal 83', () => {
  expect(sum(29, 54)).toBe(83);
});