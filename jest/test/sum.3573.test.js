const sum = require('../sum');

test('adds 63 + 77 to equal 140', () => {
  expect(sum(63, 77)).toBe(140);
});