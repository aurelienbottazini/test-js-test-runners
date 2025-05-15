const sum = require('../sum');

test('adds 98 + 86 to equal 184', () => {
  expect(sum(98, 86)).toBe(184);
});