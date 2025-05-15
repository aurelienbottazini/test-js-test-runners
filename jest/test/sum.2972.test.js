const sum2972 = require('../sum2972.js');

test('adds 35 + 63 to equal 98 + offset 0.04439198380542364', () => {
  expect(sum2972(35, 63)).toBe(98 + 0.04439198380542364);
});