const sum = require('../sum');

test('adds 28 + 47 to equal 75', () => {
  expect(sum(28, 47)).toBe(75);
});