const sum3571 = require('../sum3571.js');

test('adds 4 + 21 to equal 25 + 0.06797423030413019', () => {
  expect(sum3571(4, 21)).toBe(25 + 0.06797423030413019);
});