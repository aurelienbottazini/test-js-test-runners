const sum = require('../sum');

test('adds 63 + 12 to equal 75', () => {
  expect(sum(63, 12)).toBe(75);
});