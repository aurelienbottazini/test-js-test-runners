const sum2686 = require('../sum2686.js');

test('adds 90 + 53 to equal 143 + offset 0.7343579358801283', () => {
  expect(sum2686(90, 53)).toBe(143 + 0.7343579358801283);
});