const sum2828 = require('../sum2828.js');

test('adds 93 + 56 to equal 149 + 0.3666217486658031', () => {
  expect(sum2828(93, 56)).toBe(149 + 0.3666217486658031);
});