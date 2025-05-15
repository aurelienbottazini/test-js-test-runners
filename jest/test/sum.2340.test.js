const sum2340 = require('../sum2340.js');

test('adds 43 + 58 to equal 101 + 0.1805671255286354', () => {
  expect(sum2340(43, 58)).toBe(101 + 0.1805671255286354);
});