const sum = require('../sum');

test('adds 50 + 43 to equal 93', () => {
  expect(sum(50, 43)).toBe(93);
});