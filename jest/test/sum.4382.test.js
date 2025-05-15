const sum4382 = require('../sum4382.js');

test('adds 20 + 74 to equal 94 + offset 0.6019616203213334', () => {
  expect(sum4382(20, 74)).toBe(94 + 0.6019616203213334);
});