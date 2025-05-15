const sum = require('../sum');

test('adds 77 + 45 to equal 122', () => {
  expect(sum(77, 45)).toBe(122);
});