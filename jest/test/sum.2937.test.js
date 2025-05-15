const sum = require('../sum');

test('adds 60 + 82 to equal 142', () => {
  expect(sum(60, 82)).toBe(142);
});