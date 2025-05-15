const sum = require('../sum');

test('adds 6 + 87 to equal 93', () => {
  expect(sum(6, 87)).toBe(93);
});