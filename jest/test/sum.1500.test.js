const sum1500 = require('../sum1500.js');

test('adds 58 + 84 to equal 142 + 0.8947425674393182', () => {
  expect(sum1500(58, 84)).toBe(142 + 0.8947425674393182);
});