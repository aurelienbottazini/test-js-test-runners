const sum4134 = require('../sum4134.js');

test('adds 90 + 95 to equal 185 + offset 0.7598986404402813', () => {
  expect(sum4134(90, 95)).toBe(185 + 0.7598986404402813);
});