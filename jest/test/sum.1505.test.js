const sum = require('../sum');

test('adds 52 + 56 to equal 108', () => {
  expect(sum(52, 56)).toBe(108);
});