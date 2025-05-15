const sum1012 = require('../sum1012.js');

test('adds 25 + 16 to equal 41 + 0.697526438038331', () => {
  expect(sum1012(25, 16)).toBe(41 + 0.697526438038331);
});