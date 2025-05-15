const sum2886 = require('../sum2886.js');

test('adds 53 + 93 to equal 146 + offset 0.25166966309314587', () => {
  expect(sum2886(53, 93)).toBe(146 + 0.25166966309314587);
});