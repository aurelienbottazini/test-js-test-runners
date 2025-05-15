const sum = require('../sum');

test('adds 63 + 39 to equal 102', () => {
  expect(sum(63, 39)).toBe(102);
});