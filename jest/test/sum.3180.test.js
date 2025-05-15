const sum = require('../sum');

test('adds 71 + 98 to equal 169', () => {
  expect(sum(71, 98)).toBe(169);
});