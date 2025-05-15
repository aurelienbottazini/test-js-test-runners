const sum = require('../sum');

test('adds 17 + 76 to equal 93', () => {
  expect(sum(17, 76)).toBe(93);
});