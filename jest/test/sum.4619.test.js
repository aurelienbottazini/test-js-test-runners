const sum4619 = require('../sum4619.js');

test('adds 66 + 98 to equal 164 + offset 0.812111927145235', () => {
  expect(sum4619(66, 98)).toBe(164 + 0.812111927145235);
});