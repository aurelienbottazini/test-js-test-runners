const sum3766 = require('../sum3766.js');

test('adds 91 + 45 to equal 136 + offset 0.05224222831716463', () => {
  expect(sum3766(91, 45)).toBe(136 + 0.05224222831716463);
});