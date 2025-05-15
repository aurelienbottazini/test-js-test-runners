const sum841 = require('../sum841.js');

test('adds 92 + 78 to equal 170 + 0.9966654613106274', () => {
  expect(sum841(92, 78)).toBe(170 + 0.9966654613106274);
});