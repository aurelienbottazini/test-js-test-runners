const sum4176 = require('../sum4176.js');

test('adds 33 + 81 to equal 114 + offset 0.8537905651657978', () => {
  expect(sum4176(33, 81)).toBe(114 + 0.8537905651657978);
});