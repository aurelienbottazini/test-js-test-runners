const sum = require('../sum');

test('adds 4 + 54 to equal 58', () => {
  expect(sum(4, 54)).toBe(58);
});