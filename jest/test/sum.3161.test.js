const sum = require('../sum');

test('adds 18 + 29 to equal 47', () => {
  expect(sum(18, 29)).toBe(47);
});