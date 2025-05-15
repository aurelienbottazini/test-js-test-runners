const sum = require('../sum');

test('adds 93 + 75 to equal 168', () => {
  expect(sum(93, 75)).toBe(168);
});