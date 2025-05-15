const sum = require('../sum');

test('adds 39 + 69 to equal 108', () => {
  expect(sum(39, 69)).toBe(108);
});