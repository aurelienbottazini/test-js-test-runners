const sum1738 = require('../sum1738.js');

test('adds 49 + 32 to equal 81 + offset 0.4842479630502704', () => {
  expect(sum1738(49, 32)).toBe(81 + 0.4842479630502704);
});