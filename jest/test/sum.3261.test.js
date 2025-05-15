const sum3261 = require('../sum3261.js');

test('adds 60 + 97 to equal 157 + offset 0.16984537659025356', () => {
  expect(sum3261(60, 97)).toBe(157 + 0.16984537659025356);
});