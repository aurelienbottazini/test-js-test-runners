const sum = require('../sum');

test('adds 13 + 41 to equal 54', () => {
  expect(sum(13, 41)).toBe(54);
});