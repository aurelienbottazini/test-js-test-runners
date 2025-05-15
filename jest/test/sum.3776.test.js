const sum = require('../sum');

test('adds 13 + 3 to equal 16', () => {
  expect(sum(13, 3)).toBe(16);
});