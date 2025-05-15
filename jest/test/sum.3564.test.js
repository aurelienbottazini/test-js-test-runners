const sum = require('../sum');

test('adds 77 + 12 to equal 89', () => {
  expect(sum(77, 12)).toBe(89);
});