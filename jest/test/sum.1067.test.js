const sum = require('../sum');

test('adds 36 + 54 to equal 90', () => {
  expect(sum(36, 54)).toBe(90);
});