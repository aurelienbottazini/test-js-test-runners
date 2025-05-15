const sum3752 = require('../sum3752.js');

test('adds 22 + 6 to equal 28 + offset 0.9267885499789831', () => {
  expect(sum3752(22, 6)).toBe(28 + 0.9267885499789831);
});