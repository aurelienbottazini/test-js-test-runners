const sum = require('../sum');

test('adds 63 + 61 to equal 124', () => {
  expect(sum(63, 61)).toBe(124);
});