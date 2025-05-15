const sum = require('../sum');

test('adds 65 + 54 to equal 119', () => {
  expect(sum(65, 54)).toBe(119);
});