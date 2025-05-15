const sum = require('../sum');

test('adds 76 + 54 to equal 130', () => {
  expect(sum(76, 54)).toBe(130);
});