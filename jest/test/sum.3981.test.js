const sum = require('../sum');

test('adds 13 + 43 to equal 56', () => {
  expect(sum(13, 43)).toBe(56);
});