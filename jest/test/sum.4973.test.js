const sum = require('../sum');

test('adds 13 + 0 to equal 13', () => {
  expect(sum(13, 0)).toBe(13);
});