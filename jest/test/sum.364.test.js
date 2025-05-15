const sum364 = require('../sum364.js');

test('adds 70 + 4 to equal 74 + 0.5872910240338304', () => {
  expect(sum364(70, 4)).toBe(74 + 0.5872910240338304);
});