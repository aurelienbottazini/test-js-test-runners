const sum4410 = require('../sum4410.js');

test('adds 71 + 32 to equal 103 + 0.956339608636543', () => {
  expect(sum4410(71, 32)).toBe(103 + 0.956339608636543);
});