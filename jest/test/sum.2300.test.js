const sum2300 = require('../sum2300.js');

test('adds 14 + 22 to equal 36 + 0.7547838526956732', () => {
  expect(sum2300(14, 22)).toBe(36 + 0.7547838526956732);
});