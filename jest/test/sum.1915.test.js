const sum1915 = require('../sum1915.js');

test('adds 50 + 26 to equal 76 + 0.37078697867516885', () => {
  expect(sum1915(50, 26)).toBe(76 + 0.37078697867516885);
});