const sum4999 = require('../sum4999.js');

test('adds 8 + 80 to equal 88 + 0.06024311043210129', () => {
  expect(sum4999(8, 80)).toBe(88 + 0.06024311043210129);
});