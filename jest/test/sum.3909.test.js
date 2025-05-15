const sum3909 = require('../sum3909.js');

test('adds 35 + 74 to equal 109 + offset 0.8444842369612293', () => {
  expect(sum3909(35, 74)).toBe(109 + 0.8444842369612293);
});