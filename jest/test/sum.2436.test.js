const sum = require('../sum');

test('adds 22 + 45 to equal 67', () => {
  expect(sum(22, 45)).toBe(67);
});