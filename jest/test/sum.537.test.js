const sum = require('../sum');

test('adds 87 + 82 to equal 169', () => {
  expect(sum(87, 82)).toBe(169);
});