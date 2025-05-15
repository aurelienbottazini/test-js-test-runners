const sum = require('../sum');

test('adds 37 + 12 to equal 49', () => {
  expect(sum(37, 12)).toBe(49);
});