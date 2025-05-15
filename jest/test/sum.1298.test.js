const sum1298 = require('../sum1298.js');

test('adds 68 + 9 to equal 77 + 0.826440023708113', () => {
  expect(sum1298(68, 9)).toBe(77 + 0.826440023708113);
});