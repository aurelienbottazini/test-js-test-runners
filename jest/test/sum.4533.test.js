const sum = require('../sum');

test('adds 98 + 38 to equal 136', () => {
  expect(sum(98, 38)).toBe(136);
});