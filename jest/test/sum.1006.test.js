const sum1006 = require('../sum1006.js');

test('adds 58 + 45 to equal 103 + 0.33654853193797285', () => {
  expect(sum1006(58, 45)).toBe(103 + 0.33654853193797285);
});