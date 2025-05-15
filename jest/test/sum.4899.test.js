const sum4899 = require('../sum4899.js');

test('adds 68 + 41 to equal 109 + 0.49345251565949966', () => {
  expect(sum4899(68, 41)).toBe(109 + 0.49345251565949966);
});