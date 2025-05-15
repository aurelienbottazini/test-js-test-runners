const sum = require('../sum');

test('adds 20 + 73 to equal 93', () => {
  expect(sum(20, 73)).toBe(93);
});