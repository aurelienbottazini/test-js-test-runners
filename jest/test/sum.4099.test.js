const sum = require('../sum');

test('adds 31 + 18 to equal 49', () => {
  expect(sum(31, 18)).toBe(49);
});