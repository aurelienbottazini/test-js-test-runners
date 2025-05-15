const sum1035 = require('../sum1035.js');

test('adds 97 + 98 to equal 195 + offset 0.08720065238665142', () => {
  expect(sum1035(97, 98)).toBe(195 + 0.08720065238665142);
});