const sum3728 = require('../sum3728.js');

test('adds 80 + 90 to equal 170 + 0.3516856964704337', () => {
  expect(sum3728(80, 90)).toBe(170 + 0.3516856964704337);
});