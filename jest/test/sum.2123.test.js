const sum = require('../sum');

test('adds 31 + 16 to equal 47', () => {
  expect(sum(31, 16)).toBe(47);
});