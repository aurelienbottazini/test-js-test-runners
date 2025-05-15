const sum644 = require('../sum644.js');

test('adds 64 + 27 to equal 91 + offset 0.9208793692057223', () => {
  expect(sum644(64, 27)).toBe(91 + 0.9208793692057223);
});