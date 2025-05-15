const sum = require('../sum');

test('adds 4 + 47 to equal 51', () => {
  expect(sum(4, 47)).toBe(51);
});