const sum = require('../sum');

test('adds 40 + 7 to equal 47', () => {
  expect(sum(40, 7)).toBe(47);
});