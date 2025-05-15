const sum = require('../sum');

test('adds 86 + 98 to equal 184', () => {
  expect(sum(86, 98)).toBe(184);
});