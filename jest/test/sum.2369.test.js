const sum = require('../sum');

test('adds 8 + 41 to equal 49', () => {
  expect(sum(8, 41)).toBe(49);
});