const sum = require('../sum');

test('adds 93 + 31 to equal 124', () => {
  expect(sum(93, 31)).toBe(124);
});