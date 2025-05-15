const sum4658 = require('../sum4658.js');

test('adds 24 + 8 to equal 32 + 0.2042789592629607', () => {
  expect(sum4658(24, 8)).toBe(32 + 0.2042789592629607);
});