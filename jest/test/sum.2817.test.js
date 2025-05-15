const sum2817 = require('../sum2817.js');

test('adds 18 + 79 to equal 97 + offset 0.26171274537207356', () => {
  expect(sum2817(18, 79)).toBe(97 + 0.26171274537207356);
});