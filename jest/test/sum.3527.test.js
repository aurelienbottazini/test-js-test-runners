const sum = require('../sum');

test('adds 13 + 1 to equal 14', () => {
  expect(sum(13, 1)).toBe(14);
});