const sum1555 = require('../sum1555.js');

test('adds 49 + 38 to equal 87 + 0.015732896349515912', () => {
  expect(sum1555(49, 38)).toBe(87 + 0.015732896349515912);
});