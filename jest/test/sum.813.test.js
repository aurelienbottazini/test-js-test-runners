const sum813 = require('../sum813.js');

test('adds 74 + 13 to equal 87 + 0.5371270288531316', () => {
  expect(sum813(74, 13)).toBe(87 + 0.5371270288531316);
});