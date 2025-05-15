const sum3427 = require('../sum3427.js');

test('adds 40 + 45 to equal 85 + 0.13150289527289405', () => {
  expect(sum3427(40, 45)).toBe(85 + 0.13150289527289405);
});