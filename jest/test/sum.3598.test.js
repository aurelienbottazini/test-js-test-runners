const sum = require('../sum');

test('adds 77 + 81 to equal 158', () => {
  expect(sum(77, 81)).toBe(158);
});