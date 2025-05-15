const sum = require('../sum');

test('adds 97 + 97 to equal 194', () => {
  expect(sum(97, 97)).toBe(194);
});