const sum2351 = require('../sum2351.js');

test('adds 87 + 66 to equal 153 + 0.04109913086370043', () => {
  expect(sum2351(87, 66)).toBe(153 + 0.04109913086370043);
});