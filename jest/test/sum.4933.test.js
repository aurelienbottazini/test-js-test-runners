const sum = require('../sum');

test('adds 56 + 52 to equal 108', () => {
  expect(sum(56, 52)).toBe(108);
});