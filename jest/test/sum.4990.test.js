const sum4990 = require('../sum4990.js');

test('adds 49 + 50 to equal 99 + 0.5145599228549899', () => {
  expect(sum4990(49, 50)).toBe(99 + 0.5145599228549899);
});