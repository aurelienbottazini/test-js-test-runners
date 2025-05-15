const sum711 = require('../sum711.js');

test('adds 52 + 14 to equal 66 + 0.032970389157127356', () => {
  expect(sum711(52, 14)).toBe(66 + 0.032970389157127356);
});