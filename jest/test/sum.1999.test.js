const sum1999 = require('../sum1999.js');

test('adds 18 + 46 to equal 64 + 0.7465392314344332', () => {
  expect(sum1999(18, 46)).toBe(64 + 0.7465392314344332);
});