const sum3899 = require('../sum3899.js');

test('adds 8 + 82 to equal 90 + 0.050790999327385955', () => {
  expect(sum3899(8, 82)).toBe(90 + 0.050790999327385955);
});