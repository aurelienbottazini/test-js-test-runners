const sum = require('../sum');

test('adds 34 + 41 to equal 75', () => {
  expect(sum(34, 41)).toBe(75);
});