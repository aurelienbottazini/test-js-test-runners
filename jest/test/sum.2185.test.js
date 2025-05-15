const sum2185 = require('../sum2185.js');

test('adds 21 + 61 to equal 82 + offset 0.9690369756814682', () => {
  expect(sum2185(21, 61)).toBe(82 + 0.9690369756814682);
});