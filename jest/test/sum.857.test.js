const sum = require('../sum');

test('adds 12 + 1 to equal 13', () => {
  expect(sum(12, 1)).toBe(13);
});