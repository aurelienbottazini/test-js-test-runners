const sum = require('../sum');

test('adds 99 + 43 to equal 142', () => {
  expect(sum(99, 43)).toBe(142);
});