const sum = require('../sum');

test('adds 77 + 65 to equal 142', () => {
  expect(sum(77, 65)).toBe(142);
});