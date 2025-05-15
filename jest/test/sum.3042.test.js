const sum = require('../sum');

test('adds 56 + 54 to equal 110', () => {
  expect(sum(56, 54)).toBe(110);
});