const sum = require('../sum');

test('adds 10 + 54 to equal 64', () => {
  expect(sum(10, 54)).toBe(64);
});