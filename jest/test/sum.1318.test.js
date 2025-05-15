const sum1318 = require('../sum1318.js');

test('adds 28 + 19 to equal 47 + 0.03198962781970227', () => {
  expect(sum1318(28, 19)).toBe(47 + 0.03198962781970227);
});