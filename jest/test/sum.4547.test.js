const sum4547 = require('../sum4547.js');

test('adds 59 + 5 to equal 64 + offset 0.5018109182264461', () => {
  expect(sum4547(59, 5)).toBe(64 + 0.5018109182264461);
});