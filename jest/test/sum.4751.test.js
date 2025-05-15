const sum = require('../sum');

test('adds 20 + 54 to equal 74', () => {
  expect(sum(20, 54)).toBe(74);
});