const sum4976 = require('../sum4976.js');

test('adds 72 + 38 to equal 110 + offset 0.03967592917699003', () => {
  expect(sum4976(72, 38)).toBe(110 + 0.03967592917699003);
});