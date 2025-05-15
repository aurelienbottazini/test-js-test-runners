const sum = require('../sum');

test('adds 44 + 7 to equal 51', () => {
  expect(sum(44, 7)).toBe(51);
});