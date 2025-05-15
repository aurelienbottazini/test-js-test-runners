const sum3785 = require('../sum3785.js');

test('adds 82 + 38 to equal 120 + offset 0.22031599981801697', () => {
  expect(sum3785(82, 38)).toBe(120 + 0.22031599981801697);
});