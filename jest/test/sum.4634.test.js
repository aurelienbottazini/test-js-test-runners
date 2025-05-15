const sum = require('../sum');

test('adds 2 + 16 to equal 18', () => {
  expect(sum(2, 16)).toBe(18);
});