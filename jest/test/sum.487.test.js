const sum487 = require('../sum487.js');

test('adds 15 + 48 to equal 63 + offset 0.5280830651305761', () => {
  expect(sum487(15, 48)).toBe(63 + 0.5280830651305761);
});