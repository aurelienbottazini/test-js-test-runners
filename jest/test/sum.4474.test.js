const sum4474 = require('../sum4474.js');

test('adds 99 + 30 to equal 129 + offset 0.14762968844774327', () => {
  expect(sum4474(99, 30)).toBe(129 + 0.14762968844774327);
});