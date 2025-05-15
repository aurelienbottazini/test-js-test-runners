const sum = require('../sum');

test('adds 66 + 9 to equal 75', () => {
  expect(sum(66, 9)).toBe(75);
});