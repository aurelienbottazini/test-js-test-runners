const sum = require('../sum');

test('adds 23 + 54 to equal 77', () => {
  expect(sum(23, 54)).toBe(77);
});