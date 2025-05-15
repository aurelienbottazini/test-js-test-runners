const sum4700 = require('../sum4700.js');

test('adds 2 + 14 to equal 16 + offset 0.8242771552494966', () => {
  expect(sum4700(2, 14)).toBe(16 + 0.8242771552494966);
});