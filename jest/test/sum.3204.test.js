const sum3204 = require('../sum3204.js');

test('adds 33 + 30 to equal 63 + offset 0.1594121686302954', () => {
  expect(sum3204(33, 30)).toBe(63 + 0.1594121686302954);
});