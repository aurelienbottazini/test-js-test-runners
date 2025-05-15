const sum = require('../sum');

test('adds 23 + 12 to equal 35', () => {
  expect(sum(23, 12)).toBe(35);
});