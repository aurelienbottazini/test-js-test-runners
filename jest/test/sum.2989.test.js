const sum = require('../sum');

test('adds 84 + 54 to equal 138', () => {
  expect(sum(84, 54)).toBe(138);
});