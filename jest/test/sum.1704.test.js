const sum = require('../sum');

test('adds 13 + 76 to equal 89', () => {
  expect(sum(13, 76)).toBe(89);
});