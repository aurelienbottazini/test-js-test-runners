const sum = require('../sum');

test('adds 10 + 41 to equal 51', () => {
  expect(sum(10, 41)).toBe(51);
});