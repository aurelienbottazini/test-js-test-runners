const sum128 = require('../sum128.js');

test('adds 85 + 80 to equal 165 + offset 0.04204560801353019', () => {
  expect(sum128(85, 80)).toBe(165 + 0.04204560801353019);
});