const sum = require('../sum');

test('adds 22 + 71 to equal 93', () => {
  expect(sum(22, 71)).toBe(93);
});