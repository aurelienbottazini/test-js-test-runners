const sum = require('../sum');

test('adds 36 + 47 to equal 83', () => {
  expect(sum(36, 47)).toBe(83);
});