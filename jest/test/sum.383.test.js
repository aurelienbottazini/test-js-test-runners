const sum = require('../sum');

test('adds 24 + 32 to equal 56', () => {
  expect(sum(24, 32)).toBe(56);
});