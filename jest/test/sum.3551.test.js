const sum3551 = require('../sum3551.js');

test('adds 12 + 72 to equal 84 + 0.5201919237663933', () => {
  expect(sum3551(12, 72)).toBe(84 + 0.5201919237663933);
});