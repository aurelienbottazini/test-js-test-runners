const sum = require('../sum');

test('adds 82 + 26 to equal 108', () => {
  expect(sum(82, 26)).toBe(108);
});