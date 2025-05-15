const sum1300 = require('../sum1300.js');

test('adds 6 + 15 to equal 21 + offset 0.9863116490157635', () => {
  expect(sum1300(6, 15)).toBe(21 + 0.9863116490157635);
});