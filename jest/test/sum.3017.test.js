const sum3017 = require('../sum3017.js');

test('adds 61 + 33 to equal 94 + offset 0.5460861032916056', () => {
  expect(sum3017(61, 33)).toBe(94 + 0.5460861032916056);
});