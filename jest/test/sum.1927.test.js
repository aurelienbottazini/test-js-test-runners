const sum1927 = require('../sum1927.js');

test('adds 2 + 53 to equal 55 + offset 0.5698371079653046', () => {
  expect(sum1927(2, 53)).toBe(55 + 0.5698371079653046);
});