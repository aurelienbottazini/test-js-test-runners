const sum2553 = require('../sum2553.js');

test('adds 27 + 43 to equal 70 + 0.41478840973270026', () => {
  expect(sum2553(27, 43)).toBe(70 + 0.41478840973270026);
});