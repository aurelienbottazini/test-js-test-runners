const sum = require('../sum');

test('adds 14 + 38 to equal 52', () => {
  expect(sum(14, 38)).toBe(52);
});