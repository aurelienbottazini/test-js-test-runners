const sum = require('../sum');

test('adds 10 + 37 to equal 47', () => {
  expect(sum(10, 37)).toBe(47);
});