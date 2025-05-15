const sum = require('../sum');

test('adds 32 + 50 to equal 82', () => {
  expect(sum(32, 50)).toBe(82);
});