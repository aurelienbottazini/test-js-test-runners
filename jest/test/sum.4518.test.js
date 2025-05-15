const sum4518 = require('../sum4518.js');

test('adds 38 + 96 to equal 134 + offset 0.6174812366276148', () => {
  expect(sum4518(38, 96)).toBe(134 + 0.6174812366276148);
});