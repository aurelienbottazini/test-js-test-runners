const sum = require('../sum');

test('adds 6 + 41 to equal 47', () => {
  expect(sum(6, 41)).toBe(47);
});