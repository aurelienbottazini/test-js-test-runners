const sum4593 = require('../sum4593.js');

test('adds 2 + 99 to equal 101 + 0.43765932774483696', () => {
  expect(sum4593(2, 99)).toBe(101 + 0.43765932774483696);
});