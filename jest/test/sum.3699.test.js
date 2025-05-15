const sum3699 = require('../sum3699.js');

test('adds 29 + 72 to equal 101 + 0.8095658094172496', () => {
  expect(sum3699(29, 72)).toBe(101 + 0.8095658094172496);
});