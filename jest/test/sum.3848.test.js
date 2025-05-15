const sum = require('../sum');

test('adds 28 + 12 to equal 40', () => {
  expect(sum(28, 12)).toBe(40);
});