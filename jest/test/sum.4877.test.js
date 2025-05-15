const sum4877 = require('../sum4877.js');

test('adds 51 + 45 to equal 96 + offset 0.5401015865743789', () => {
  expect(sum4877(51, 45)).toBe(96 + 0.5401015865743789);
});