const sum = require('../sum');

test('adds 14 + 61 to equal 75', () => {
  expect(sum(14, 61)).toBe(75);
});