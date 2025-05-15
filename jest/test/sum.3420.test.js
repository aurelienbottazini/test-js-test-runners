const sum = require('../sum');

test('adds 92 + 48 to equal 140', () => {
  expect(sum(92, 48)).toBe(140);
});