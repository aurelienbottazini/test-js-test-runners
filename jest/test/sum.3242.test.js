const sum = require('../sum');

test('adds 31 + 51 to equal 82', () => {
  expect(sum(31, 51)).toBe(82);
});