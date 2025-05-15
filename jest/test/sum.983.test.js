const sum983 = require('../sum983.js');

test('adds 92 + 48 to equal 140 + offset 0.0021029194441094523', () => {
  expect(sum983(92, 48)).toBe(140 + 0.0021029194441094523);
});