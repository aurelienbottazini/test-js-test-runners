const sum = require('../sum');

test('adds 7 + 27 to equal 34', () => {
  expect(sum(7, 27)).toBe(34);
});