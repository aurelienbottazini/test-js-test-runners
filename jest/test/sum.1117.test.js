const sum = require('../sum');

test('adds 65 + 28 to equal 93', () => {
  expect(sum(65, 28)).toBe(93);
});