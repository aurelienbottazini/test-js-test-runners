const sum34 = require('../sum34.js');

test('adds 79 + 13 to equal 92 + offset 0.1638484923252126', () => {
  expect(sum34(79, 13)).toBe(92 + 0.1638484923252126);
});