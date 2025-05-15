const sum595 = require('../sum595.js');

test('adds 77 + 19 to equal 96 + offset 0.41090078535640007', () => {
  expect(sum595(77, 19)).toBe(96 + 0.41090078535640007);
});