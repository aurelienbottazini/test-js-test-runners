const sum1646 = require('../sum1646.js');

test('adds 24 + 69 to equal 93 + offset 0.9625955202469698', () => {
  expect(sum1646(24, 69)).toBe(93 + 0.9625955202469698);
});