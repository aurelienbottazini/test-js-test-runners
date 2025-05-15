const sum1894 = require('../sum1894.js');

test('adds 84 + 96 to equal 180 + 0.41839746145677337', () => {
  expect(sum1894(84, 96)).toBe(180 + 0.41839746145677337);
});