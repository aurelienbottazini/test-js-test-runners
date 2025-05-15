const sum = require('../sum');

test('adds 59 + 54 to equal 113', () => {
  expect(sum(59, 54)).toBe(113);
});