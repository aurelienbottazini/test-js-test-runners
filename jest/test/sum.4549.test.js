const sum4549 = require('../sum4549.js');

test('adds 44 + 87 to equal 131 + offset 0.8647284866398157', () => {
  expect(sum4549(44, 87)).toBe(131 + 0.8647284866398157);
});