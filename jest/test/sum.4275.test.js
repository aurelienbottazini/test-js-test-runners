const sum = require('../sum');

test('adds 13 + 86 to equal 99', () => {
  expect(sum(13, 86)).toBe(99);
});