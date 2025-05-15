const sum = require('../sum');

test('adds 5 + 70 to equal 75', () => {
  expect(sum(5, 70)).toBe(75);
});