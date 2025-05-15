const sum = require('../sum');

test('adds 73 + 96 to equal 169', () => {
  expect(sum(73, 96)).toBe(169);
});