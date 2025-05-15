const sum1625 = require('../sum1625.js');

test('adds 62 + 84 to equal 146 + offset 0.8664249874472957', () => {
  expect(sum1625(62, 84)).toBe(146 + 0.8664249874472957);
});