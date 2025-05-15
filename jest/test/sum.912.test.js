const sum = require('../sum');

test('adds 52 + 54 to equal 106', () => {
  expect(sum(52, 54)).toBe(106);
});