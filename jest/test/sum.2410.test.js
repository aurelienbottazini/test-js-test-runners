const sum2410 = require('../sum2410.js');

test('adds 23 + 78 to equal 101 + offset 0.4566011522492016', () => {
  expect(sum2410(23, 78)).toBe(101 + 0.4566011522492016);
});