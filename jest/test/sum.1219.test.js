const sum1219 = require('../sum1219.js');

test('adds 41 + 78 to equal 119 + 0.5640276959545503', () => {
  expect(sum1219(41, 78)).toBe(119 + 0.5640276959545503);
});