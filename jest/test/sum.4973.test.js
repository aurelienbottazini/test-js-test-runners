const sum4973 = require('../sum4973.js');

test('adds 85 + 77 to equal 162 + offset 0.5145698329020527', () => {
  expect(sum4973(85, 77)).toBe(162 + 0.5145698329020527);
});