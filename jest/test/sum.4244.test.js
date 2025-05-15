const sum4244 = require('../sum4244.js');

test('adds 20 + 4 to equal 24 + offset 0.18729079807255677', () => {
  expect(sum4244(20, 4)).toBe(24 + 0.18729079807255677);
});