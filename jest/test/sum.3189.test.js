const sum3189 = require('../sum3189.js');

test('adds 71 + 26 to equal 97 + 0.878342041239189', () => {
  expect(sum3189(71, 26)).toBe(97 + 0.878342041239189);
});