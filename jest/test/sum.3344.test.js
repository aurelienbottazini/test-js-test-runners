const sum3344 = require('../sum3344.js');

test('adds 51 + 45 to equal 96 + 0.6008343024634955', () => {
  expect(sum3344(51, 45)).toBe(96 + 0.6008343024634955);
});