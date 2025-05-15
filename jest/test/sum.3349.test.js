const sum3349 = require('../sum3349.js');

test('adds 76 + 40 to equal 116 + offset 0.3040460849606673', () => {
  expect(sum3349(76, 40)).toBe(116 + 0.3040460849606673);
});