const sum4379 = require('../sum4379.js');

test('adds 35 + 97 to equal 132 + offset 0.15421837870817223', () => {
  expect(sum4379(35, 97)).toBe(132 + 0.15421837870817223);
});