const sum = require('../sum');

test('adds 19 + 56 to equal 75', () => {
  expect(sum(19, 56)).toBe(75);
});