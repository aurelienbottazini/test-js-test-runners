const sum = require('../sum');

test('adds 72 + 70 to equal 142', () => {
  expect(sum(72, 70)).toBe(142);
});