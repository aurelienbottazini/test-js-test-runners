const sum = require('../sum');

test('adds 0 + 51 to equal 51', () => {
  expect(sum(0, 51)).toBe(51);
});