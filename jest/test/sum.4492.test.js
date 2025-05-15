const sum4492 = require('../sum4492.js');

test('adds 85 + 38 to equal 123 + 0.6170269422735077', () => {
  expect(sum4492(85, 38)).toBe(123 + 0.6170269422735077);
});