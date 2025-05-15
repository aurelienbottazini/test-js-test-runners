const sum4240 = require('../sum4240.js');

test('adds 64 + 88 to equal 152 + offset 0.9405510089824897', () => {
  expect(sum4240(64, 88)).toBe(152 + 0.9405510089824897);
});