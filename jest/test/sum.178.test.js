const sum = require('../sum');

test('adds 50 + 6 to equal 56', () => {
  expect(sum(50, 6)).toBe(56);
});