const sum = require('../sum');

test('adds 9 + 92 to equal 101', () => {
  expect(sum(9, 92)).toBe(101);
});