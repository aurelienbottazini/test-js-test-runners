const sum = require('../sum');

test('adds 47 + 46 to equal 93', () => {
  expect(sum(47, 46)).toBe(93);
});