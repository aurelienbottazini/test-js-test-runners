const sum2136 = require('../sum2136.js');

test('adds 71 + 27 to equal 98 + offset 0.5841681231214916', () => {
  expect(sum2136(71, 27)).toBe(98 + 0.5841681231214916);
});