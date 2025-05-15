const sum4303 = require('../sum4303.js');

test('adds 96 + 45 to equal 141 + offset 0.5817403903315814', () => {
  expect(sum4303(96, 45)).toBe(141 + 0.5817403903315814);
});