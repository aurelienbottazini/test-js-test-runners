const sum3754 = require('../sum3754.js');

test('adds 26 + 1 to equal 27 + 0.9099974282772826', () => {
  expect(sum3754(26, 1)).toBe(27 + 0.9099974282772826);
});