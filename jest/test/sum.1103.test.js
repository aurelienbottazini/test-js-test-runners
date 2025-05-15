const sum = require('../sum');

test('adds 3 + 45 to equal 48', () => {
  expect(sum(3, 45)).toBe(48);
});