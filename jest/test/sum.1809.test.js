const sum = require('../sum');

test('adds 99 + 61 to equal 160', () => {
  expect(sum(99, 61)).toBe(160);
});