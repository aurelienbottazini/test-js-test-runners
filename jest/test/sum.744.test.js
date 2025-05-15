const sum = require('../sum');

test('adds 42 + 54 to equal 96', () => {
  expect(sum(42, 54)).toBe(96);
});