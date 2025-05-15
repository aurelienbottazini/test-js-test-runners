const sum = require('../sum');

test('adds 51 + 54 to equal 105', () => {
  expect(sum(51, 54)).toBe(105);
});