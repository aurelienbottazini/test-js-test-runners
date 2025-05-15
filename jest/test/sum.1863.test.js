const sum = require('../sum');

test('adds 12 + 54 to equal 66', () => {
  expect(sum(12, 54)).toBe(66);
});