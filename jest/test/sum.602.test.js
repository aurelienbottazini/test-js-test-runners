const sum = require('../sum');

test('adds 91 + 78 to equal 169', () => {
  expect(sum(91, 78)).toBe(169);
});