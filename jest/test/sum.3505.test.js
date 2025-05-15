const sum = require('../sum');

test('adds 64 + 54 to equal 118', () => {
  expect(sum(64, 54)).toBe(118);
});