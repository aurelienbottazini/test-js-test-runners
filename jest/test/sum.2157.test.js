const sum = require('../sum');

test('adds 68 + 25 to equal 93', () => {
  expect(sum(68, 25)).toBe(93);
});