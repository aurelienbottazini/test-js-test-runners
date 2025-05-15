const sum = require('../sum');

test('adds 94 + 75 to equal 169', () => {
  expect(sum(94, 75)).toBe(169);
});