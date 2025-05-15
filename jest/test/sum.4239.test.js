const sum4239 = require('../sum4239.js');

test('adds 47 + 98 to equal 145 + 0.614593043490331', () => {
  expect(sum4239(47, 98)).toBe(145 + 0.614593043490331);
});