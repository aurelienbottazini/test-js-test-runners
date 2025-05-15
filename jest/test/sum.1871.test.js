const sum = require('../sum');

test('adds 25 + 99 to equal 124', () => {
  expect(sum(25, 99)).toBe(124);
});