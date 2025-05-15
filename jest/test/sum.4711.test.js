const sum4711 = require('../sum4711.js');

test('adds 52 + 91 to equal 143 + 0.8990692540116075', () => {
  expect(sum4711(52, 91)).toBe(143 + 0.8990692540116075);
});