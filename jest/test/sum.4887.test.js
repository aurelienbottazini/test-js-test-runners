const sum = require('../sum');

test('adds 15 + 45 to equal 60', () => {
  expect(sum(15, 45)).toBe(60);
});