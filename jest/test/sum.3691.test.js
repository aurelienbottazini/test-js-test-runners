const sum3691 = require('../sum3691.js');

test('adds 74 + 45 to equal 119 + 0.9881758938808277', () => {
  expect(sum3691(74, 45)).toBe(119 + 0.9881758938808277);
});