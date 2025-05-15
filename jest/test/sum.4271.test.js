const sum = require('../sum');

test('adds 60 + 98 to equal 158', () => {
  expect(sum(60, 98)).toBe(158);
});