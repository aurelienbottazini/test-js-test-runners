const sum = require('../sum');

test('adds 23 + 79 to equal 102', () => {
  expect(sum(23, 79)).toBe(102);
});