const sum = require('../sum');

test('adds 2 + 99 to equal 101', () => {
  expect(sum(2, 99)).toBe(101);
});