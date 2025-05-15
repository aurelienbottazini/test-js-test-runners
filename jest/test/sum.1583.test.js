const sum1583 = require('../sum1583.js');

test('adds 21 + 78 to equal 99 + 0.9882128300985528', () => {
  expect(sum1583(21, 78)).toBe(99 + 0.9882128300985528);
});