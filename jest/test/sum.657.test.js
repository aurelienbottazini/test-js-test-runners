const sum = require('../sum');

test('adds 63 + 54 to equal 117', () => {
  expect(sum(63, 54)).toBe(117);
});