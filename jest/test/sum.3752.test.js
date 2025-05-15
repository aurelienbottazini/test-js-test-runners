const sum3752 = require('../sum3752.js');

test('adds 37 + 28 to equal 65 + 0.2745454687230997', () => {
  expect(sum3752(37, 28)).toBe(65 + 0.2745454687230997);
});