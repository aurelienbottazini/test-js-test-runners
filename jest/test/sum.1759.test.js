const sum = require('../sum');

test('adds 8 + 5 to equal 13', () => {
  expect(sum(8, 5)).toBe(13);
});