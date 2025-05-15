const sum1744 = require('../sum1744.js');

test('adds 1 + 0 to equal 1 + offset 0.6632598243081799', () => {
  expect(sum1744(1, 0)).toBe(1 + 0.6632598243081799);
});