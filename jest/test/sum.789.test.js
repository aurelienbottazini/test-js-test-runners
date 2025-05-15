const sum = require('../sum');

test('adds 53 + 47 to equal 100', () => {
  expect(sum(53, 47)).toBe(100);
});