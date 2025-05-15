const sum = require('../sum');

test('adds 77 + 51 to equal 128', () => {
  expect(sum(77, 51)).toBe(128);
});