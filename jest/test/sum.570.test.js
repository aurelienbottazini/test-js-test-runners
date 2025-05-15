const sum = require('../sum');

test('adds 69 + 6 to equal 75', () => {
  expect(sum(69, 6)).toBe(75);
});