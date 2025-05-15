const sum3448 = require('../sum3448.js');

test('adds 56 + 57 to equal 113 + offset 0.8597267713042647', () => {
  expect(sum3448(56, 57)).toBe(113 + 0.8597267713042647);
});