const sum1989 = require('../sum1989.js');

test('adds 54 + 86 to equal 140 + 0.06681075735817044', () => {
  expect(sum1989(54, 86)).toBe(140 + 0.06681075735817044);
});