const sum = require('../sum');

test('adds 93 + 58 to equal 151', () => {
  expect(sum(93, 58)).toBe(151);
});