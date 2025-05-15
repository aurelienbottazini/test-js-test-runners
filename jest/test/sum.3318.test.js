const sum3318 = require('../sum3318.js');

test('adds 29 + 48 to equal 77 + offset 0.633755634401692', () => {
  expect(sum3318(29, 48)).toBe(77 + 0.633755634401692);
});