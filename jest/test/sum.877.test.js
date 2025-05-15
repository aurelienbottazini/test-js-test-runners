const sum = require('../sum');

test('adds 47 + 41 to equal 88', () => {
  expect(sum(47, 41)).toBe(88);
});