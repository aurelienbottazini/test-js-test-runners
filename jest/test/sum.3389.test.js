const sum = require('../sum');

test('adds 56 + 16 to equal 72', () => {
  expect(sum(56, 16)).toBe(72);
});