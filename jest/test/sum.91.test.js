const sum = require('../sum');

test('adds 89 + 47 to equal 136', () => {
  expect(sum(89, 47)).toBe(136);
});