const sum3711 = require('../sum3711.js');

test('adds 14 + 96 to equal 110 + offset 0.5257178949709456', () => {
  expect(sum3711(14, 96)).toBe(110 + 0.5257178949709456);
});