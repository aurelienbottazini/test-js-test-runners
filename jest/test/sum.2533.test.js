const sum2533 = require('../sum2533.js');

test('adds 64 + 45 to equal 109 + offset 0.8822583190975942', () => {
  expect(sum2533(64, 45)).toBe(109 + 0.8822583190975942);
});