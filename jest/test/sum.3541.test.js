const sum3541 = require('../sum3541.js');

test('adds 49 + 84 to equal 133 + 0.28760137603011515', () => {
  expect(sum3541(49, 84)).toBe(133 + 0.28760137603011515);
});