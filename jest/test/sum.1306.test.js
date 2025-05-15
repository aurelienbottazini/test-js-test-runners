const sum1306 = require('../sum1306.js');

test('adds 39 + 7 to equal 46 + offset 0.8199265777167501', () => {
  expect(sum1306(39, 7)).toBe(46 + 0.8199265777167501);
});