const sum = require('../sum');

test('adds 13 + 69 to equal 82', () => {
  expect(sum(13, 69)).toBe(82);
});