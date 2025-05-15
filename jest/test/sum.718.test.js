const sum = require('../sum');

test('adds 77 + 47 to equal 124', () => {
  expect(sum(77, 47)).toBe(124);
});