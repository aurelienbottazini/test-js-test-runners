const sum1357 = require('../sum1357.js');

test('adds 93 + 32 to equal 125 + offset 0.5578364375374308', () => {
  expect(sum1357(93, 32)).toBe(125 + 0.5578364375374308);
});