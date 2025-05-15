const sum = require('../sum');

test('adds 99 + 41 to equal 140', () => {
  expect(sum(99, 41)).toBe(140);
});