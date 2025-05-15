const sum = require('../sum');

test('adds 71 + 45 to equal 116', () => {
  expect(sum(71, 45)).toBe(116);
});