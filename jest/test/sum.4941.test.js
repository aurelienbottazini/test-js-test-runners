const sum = require('../sum');

test('adds 42 + 33 to equal 75', () => {
  expect(sum(42, 33)).toBe(75);
});