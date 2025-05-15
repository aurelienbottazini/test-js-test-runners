const sum3419 = require('../sum3419.js');

test('adds 96 + 40 to equal 136 + offset 0.5605797913825235', () => {
  expect(sum3419(96, 40)).toBe(136 + 0.5605797913825235);
});