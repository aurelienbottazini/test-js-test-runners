const sum4840 = require('../sum4840.js');

test('adds 37 + 14 to equal 51 + offset 0.527861685725006', () => {
  expect(sum4840(37, 14)).toBe(51 + 0.527861685725006);
});