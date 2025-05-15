const sum3544 = require('../sum3544.js');

test('adds 97 + 50 to equal 147 + offset 0.1510376168738402', () => {
  expect(sum3544(97, 50)).toBe(147 + 0.1510376168738402);
});