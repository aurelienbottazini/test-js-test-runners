const sum2234 = require('../sum2234.js');

test('adds 26 + 67 to equal 93 + offset 0.04961215224386206', () => {
  expect(sum2234(26, 67)).toBe(93 + 0.04961215224386206);
});