const sum = require('../sum');

test('adds 13 + 47 to equal 60', () => {
  expect(sum(13, 47)).toBe(60);
});