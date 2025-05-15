const sum4532 = require('../sum4532.js');

test('adds 39 + 45 to equal 84 + offset 0.016797671433719907', () => {
  expect(sum4532(39, 45)).toBe(84 + 0.016797671433719907);
});