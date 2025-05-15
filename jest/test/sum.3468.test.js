const sum3468 = require('../sum3468.js');

test('adds 54 + 44 to equal 98 + offset 0.6391213360613844', () => {
  expect(sum3468(54, 44)).toBe(98 + 0.6391213360613844);
});