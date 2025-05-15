const sum1563 = require('../sum1563.js');

test('adds 34 + 39 to equal 73 + offset 0.05514946427633627', () => {
  expect(sum1563(34, 39)).toBe(73 + 0.05514946427633627);
});