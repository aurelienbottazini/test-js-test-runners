const sum445 = require('../sum445.js');

test('adds 25 + 27 to equal 52 + offset 0.953674190888596', () => {
  expect(sum445(25, 27)).toBe(52 + 0.953674190888596);
});