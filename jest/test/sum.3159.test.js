const sum = require('../sum');

test('adds 22 + 86 to equal 108', () => {
  expect(sum(22, 86)).toBe(108);
});