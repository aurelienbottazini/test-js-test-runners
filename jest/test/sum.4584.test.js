const sum4584 = require('../sum4584.js');

test('adds 33 + 47 to equal 80 + 0.20433033678528267', () => {
  expect(sum4584(33, 47)).toBe(80 + 0.20433033678528267);
});