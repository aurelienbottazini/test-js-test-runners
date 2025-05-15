const sum4670 = require('../sum4670.js');

test('adds 88 + 38 to equal 126 + offset 0.9197026982830633', () => {
  expect(sum4670(88, 38)).toBe(126 + 0.9197026982830633);
});