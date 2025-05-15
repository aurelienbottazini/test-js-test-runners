const sum = require('../sum');

test('adds 16 + 16 to equal 32', () => {
  expect(sum(16, 16)).toBe(32);
});