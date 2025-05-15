const sum2541 = require('../sum2541.js');

test('adds 1 + 42 to equal 43 + offset 0.13381365522840283', () => {
  expect(sum2541(1, 42)).toBe(43 + 0.13381365522840283);
});