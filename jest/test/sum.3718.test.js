const sum = require('../sum');

test('adds 26 + 82 to equal 108', () => {
  expect(sum(26, 82)).toBe(108);
});