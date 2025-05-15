const sum = require('../sum');

test('adds 30 + 17 to equal 47', () => {
  expect(sum(30, 17)).toBe(47);
});