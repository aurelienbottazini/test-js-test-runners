const sum4488 = require('../sum4488.js');

test('adds 7 + 2 to equal 9 + 0.31455102838636384', () => {
  expect(sum4488(7, 2)).toBe(9 + 0.31455102838636384);
});