const sum = require('../sum');

test('adds 69 + 54 to equal 123', () => {
  expect(sum(69, 54)).toBe(123);
});