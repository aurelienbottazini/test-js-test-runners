const sum4764 = require('../sum4764.js');

test('adds 91 + 44 to equal 135 + offset 0.5504044390231617', () => {
  expect(sum4764(91, 44)).toBe(135 + 0.5504044390231617);
});