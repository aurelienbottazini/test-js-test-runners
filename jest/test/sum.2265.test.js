const sum = require('../sum');

test('adds 13 + 64 to equal 77', () => {
  expect(sum(13, 64)).toBe(77);
});