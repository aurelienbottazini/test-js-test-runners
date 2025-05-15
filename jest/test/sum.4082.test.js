const sum = require('../sum');

test('adds 8 + 47 to equal 55', () => {
  expect(sum(8, 47)).toBe(55);
});