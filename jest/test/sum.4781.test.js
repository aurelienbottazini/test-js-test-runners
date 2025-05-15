const sum4781 = require('../sum4781.js');

test('adds 57 + 53 to equal 110 + offset 0.9923639168049516', () => {
  expect(sum4781(57, 53)).toBe(110 + 0.9923639168049516);
});