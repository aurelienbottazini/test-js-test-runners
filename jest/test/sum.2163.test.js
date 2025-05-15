const sum = require('../sum');

test('adds 17 + 54 to equal 71', () => {
  expect(sum(17, 54)).toBe(71);
});