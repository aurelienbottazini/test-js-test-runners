const sum = require('../sum');

test('adds 34 + 13 to equal 47', () => {
  expect(sum(34, 13)).toBe(47);
});