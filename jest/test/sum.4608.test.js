const sum4608 = require('../sum4608.js');

test('adds 62 + 33 to equal 95 + offset 0.2747964331173316', () => {
  expect(sum4608(62, 33)).toBe(95 + 0.2747964331173316);
});