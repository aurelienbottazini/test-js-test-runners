const sum = require('../sum');

test('adds 34 + 15 to equal 49', () => {
  expect(sum(34, 15)).toBe(49);
});