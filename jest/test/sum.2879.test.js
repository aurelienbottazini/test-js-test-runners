const sum = require('../sum');

test('adds 15 + 32 to equal 47', () => {
  expect(sum(15, 32)).toBe(47);
});