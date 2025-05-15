const sum663 = require('../sum663.js');

test('adds 95 + 87 to equal 182 + offset 0.9394842260276806', () => {
  expect(sum663(95, 87)).toBe(182 + 0.9394842260276806);
});