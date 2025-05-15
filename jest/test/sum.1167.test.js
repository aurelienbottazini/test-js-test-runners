const sum1167 = require('../sum1167.js');

test('adds 75 + 96 to equal 171 + offset 0.21355342875159367', () => {
  expect(sum1167(75, 96)).toBe(171 + 0.21355342875159367);
});