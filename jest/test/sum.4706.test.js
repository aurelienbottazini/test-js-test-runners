const sum = require('../sum');

test('adds 11 + 41 to equal 52', () => {
  expect(sum(11, 41)).toBe(52);
});