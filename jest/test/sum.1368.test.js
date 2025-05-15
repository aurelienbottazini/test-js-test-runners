const sum = require('../sum');

test('adds 47 + 9 to equal 56', () => {
  expect(sum(47, 9)).toBe(56);
});