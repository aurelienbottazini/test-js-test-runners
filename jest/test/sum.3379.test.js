const sum = require('../sum');

test('adds 24 + 16 to equal 40', () => {
  expect(sum(24, 16)).toBe(40);
});