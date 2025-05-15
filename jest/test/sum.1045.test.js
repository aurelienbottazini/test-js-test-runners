const sum = require('../sum');

test('adds 1 + 48 to equal 49', () => {
  expect(sum(1, 48)).toBe(49);
});