const sum22 = require('../sum22.js');

test('adds 95 + 4 to equal 99 + offset 0.17086098550934625', () => {
  expect(sum22(95, 4)).toBe(99 + 0.17086098550934625);
});