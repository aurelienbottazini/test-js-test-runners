const sum3822 = require('../sum3822.js');

test('adds 94 + 27 to equal 121 + 0.9248704142216617', () => {
  expect(sum3822(94, 27)).toBe(121 + 0.9248704142216617);
});