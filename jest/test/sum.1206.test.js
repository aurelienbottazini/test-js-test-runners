const sum = require('../sum');

test('adds 36 + 16 to equal 52', () => {
  expect(sum(36, 16)).toBe(52);
});