const sum3 = require('../sum3.js');

test('adds 91 + 43 to equal 134 + 0.5392755326168637', () => {
  expect(sum3(91, 43)).toBe(134 + 0.5392755326168637);
});