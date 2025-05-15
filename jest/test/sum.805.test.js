const sum = require('../sum');

test('adds 50 + 54 to equal 104', () => {
  expect(sum(50, 54)).toBe(104);
});