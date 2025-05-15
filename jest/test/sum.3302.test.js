const sum3302 = require('../sum3302.js');

test('adds 93 + 36 to equal 129 + offset 0.8478551458239622', () => {
  expect(sum3302(93, 36)).toBe(129 + 0.8478551458239622);
});