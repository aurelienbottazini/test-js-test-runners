const sum = require('../sum');

test('adds 21 + 51 to equal 72', () => {
  expect(sum(21, 51)).toBe(72);
});