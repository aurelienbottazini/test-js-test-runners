const sum845 = require('../sum845.js');

test('adds 66 + 81 to equal 147 + offset 0.5086312180177205', () => {
  expect(sum845(66, 81)).toBe(147 + 0.5086312180177205);
});