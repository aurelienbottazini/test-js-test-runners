const sum4625 = require('../sum4625.js');

test('adds 51 + 81 to equal 132 + offset 0.19238144031019633', () => {
  expect(sum4625(51, 81)).toBe(132 + 0.19238144031019633);
});