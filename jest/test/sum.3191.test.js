const sum3191 = require('../sum3191.js');

test('adds 47 + 7 to equal 54 + offset 0.4112342610651798', () => {
  expect(sum3191(47, 7)).toBe(54 + 0.4112342610651798);
});