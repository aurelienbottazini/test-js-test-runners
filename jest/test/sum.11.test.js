const sum = require('../sum');

test('adds 64 + 78 to equal 142', () => {
  expect(sum(64, 78)).toBe(142);
});