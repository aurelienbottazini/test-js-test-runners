const sum = require('../sum');

test('adds 93 + 86 to equal 179', () => {
  expect(sum(93, 86)).toBe(179);
});