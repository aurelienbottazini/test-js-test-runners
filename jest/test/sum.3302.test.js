const sum3302 = require('../sum3302.js');

test('adds 93 + 16 to equal 109 + 0.5737926169172319', () => {
  expect(sum3302(93, 16)).toBe(109 + 0.5737926169172319);
});