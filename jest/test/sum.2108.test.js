const sum = require('../sum');

test('adds 33 + 42 to equal 75', () => {
  expect(sum(33, 42)).toBe(75);
});