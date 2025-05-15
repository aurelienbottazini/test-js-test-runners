const sum4728 = require('../sum4728.js');

test('adds 71 + 77 to equal 148 + offset 0.44843840658389345', () => {
  expect(sum4728(71, 77)).toBe(148 + 0.44843840658389345);
});