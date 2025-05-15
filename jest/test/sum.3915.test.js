const sum = require('../sum');

test('adds 29 + 18 to equal 47', () => {
  expect(sum(29, 18)).toBe(47);
});