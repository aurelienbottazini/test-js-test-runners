const sum = require('../sum');

test('adds 88 + 81 to equal 169', () => {
  expect(sum(88, 81)).toBe(169);
});