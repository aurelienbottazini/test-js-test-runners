const sum = require('../sum');

test('adds 12 + 45 to equal 57', () => {
  expect(sum(12, 45)).toBe(57);
});