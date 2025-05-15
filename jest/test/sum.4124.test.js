const sum4124 = require('../sum4124.js');

test('adds 87 + 82 to equal 169 + offset 0.7289010948343091', () => {
  expect(sum4124(87, 82)).toBe(169 + 0.7289010948343091);
});