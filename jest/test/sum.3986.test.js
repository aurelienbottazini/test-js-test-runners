const sum3986 = require('../sum3986.js');

test('adds 77 + 12 to equal 89 + offset 0.580648816980525', () => {
  expect(sum3986(77, 12)).toBe(89 + 0.580648816980525);
});