const sum = require('../sum');

test('adds 31 + 77 to equal 108', () => {
  expect(sum(31, 77)).toBe(108);
});