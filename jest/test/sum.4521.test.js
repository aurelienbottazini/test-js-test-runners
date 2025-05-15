const sum4521 = require('../sum4521.js');

test('adds 78 + 87 to equal 165 + offset 0.45994966339915355', () => {
  expect(sum4521(78, 87)).toBe(165 + 0.45994966339915355);
});