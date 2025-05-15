const sum = require('../sum');

test('adds 84 + 85 to equal 169', () => {
  expect(sum(84, 85)).toBe(169);
});