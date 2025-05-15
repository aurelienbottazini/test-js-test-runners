const sum = require('../sum');

test('adds 97 + 82 to equal 179', () => {
  expect(sum(97, 82)).toBe(179);
});