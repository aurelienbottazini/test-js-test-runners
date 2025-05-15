const sum = require('../sum');

test('adds 38 + 51 to equal 89', () => {
  expect(sum(38, 51)).toBe(89);
});