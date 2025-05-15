const sum = require('../sum');

test('adds 28 + 7 to equal 35', () => {
  expect(sum(28, 7)).toBe(35);
});