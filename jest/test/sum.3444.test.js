const sum3444 = require('../sum3444.js');

test('adds 54 + 26 to equal 80 + offset 0.8051583775146087', () => {
  expect(sum3444(54, 26)).toBe(80 + 0.8051583775146087);
});