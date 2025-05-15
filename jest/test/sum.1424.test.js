const sum = require('../sum');

test('adds 58 + 41 to equal 99', () => {
  expect(sum(58, 41)).toBe(99);
});