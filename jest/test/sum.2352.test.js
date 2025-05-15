const sum = require('../sum');

test('adds 67 + 26 to equal 93', () => {
  expect(sum(67, 26)).toBe(93);
});