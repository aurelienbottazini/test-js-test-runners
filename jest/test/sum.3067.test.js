const sum = require('../sum');

test('adds 62 + 31 to equal 93', () => {
  expect(sum(62, 31)).toBe(93);
});