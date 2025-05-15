const sum2213 = require('../sum2213.js');

test('adds 11 + 28 to equal 39 + 0.9986604057707791', () => {
  expect(sum2213(11, 28)).toBe(39 + 0.9986604057707791);
});