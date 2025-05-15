const sum2046 = require('../sum2046.js');

test('adds 85 + 77 to equal 162 + 0.376048504997464', () => {
  expect(sum2046(85, 77)).toBe(162 + 0.376048504997464);
});