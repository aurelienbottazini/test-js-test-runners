const sum = require('../sum');

test('adds 23 + 85 to equal 108', () => {
  expect(sum(23, 85)).toBe(108);
});