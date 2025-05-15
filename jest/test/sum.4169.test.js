const sum4169 = require('../sum4169.js');

test('adds 67 + 34 to equal 101 + offset 0.3422888122382791', () => {
  expect(sum4169(67, 34)).toBe(101 + 0.3422888122382791);
});