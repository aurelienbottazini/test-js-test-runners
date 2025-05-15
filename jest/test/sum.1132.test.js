const sum = require('../sum');

test('adds 38 + 37 to equal 75', () => {
  expect(sum(38, 37)).toBe(75);
});