const sum1633 = require('../sum1633.js');

test('adds 93 + 84 to equal 177 + offset 0.13091135315958902', () => {
  expect(sum1633(93, 84)).toBe(177 + 0.13091135315958902);
});