const sum696 = require('../sum696.js');

test('adds 27 + 68 to equal 95 + 0.9446632896754047', () => {
  expect(sum696(27, 68)).toBe(95 + 0.9446632896754047);
});