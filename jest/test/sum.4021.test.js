const sum4021 = require('../sum4021.js');

test('adds 56 + 10 to equal 66 + offset 0.4498987163055562', () => {
  expect(sum4021(56, 10)).toBe(66 + 0.4498987163055562);
});