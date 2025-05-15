const sum3947 = require('../sum3947.js');

test('adds 97 + 78 to equal 175 + 0.7890179129954598', () => {
  expect(sum3947(97, 78)).toBe(175 + 0.7890179129954598);
});