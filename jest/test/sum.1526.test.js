const sum = require('../sum');

test('adds 14 + 94 to equal 108', () => {
  expect(sum(14, 94)).toBe(108);
});