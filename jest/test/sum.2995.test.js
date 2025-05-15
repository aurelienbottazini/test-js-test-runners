const sum = require('../sum');

test('adds 68 + 45 to equal 113', () => {
  expect(sum(68, 45)).toBe(113);
});