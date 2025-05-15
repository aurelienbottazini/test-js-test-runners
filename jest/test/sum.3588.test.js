const sum = require('../sum');

test('adds 68 + 7 to equal 75', () => {
  expect(sum(68, 7)).toBe(75);
});