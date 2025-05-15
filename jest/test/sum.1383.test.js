const sum1383 = require('../sum1383.js');

test('adds 42 + 45 to equal 87 + 0.21436204718087148', () => {
  expect(sum1383(42, 45)).toBe(87 + 0.21436204718087148);
});