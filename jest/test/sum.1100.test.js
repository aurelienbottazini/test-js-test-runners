const sum = require('../sum');

test('adds 47 + 2 to equal 49', () => {
  expect(sum(47, 2)).toBe(49);
});