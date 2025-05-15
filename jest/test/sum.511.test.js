const sum511 = require('../sum511.js');

test('adds 29 + 63 to equal 92 + 0.9238261006895575', () => {
  expect(sum511(29, 63)).toBe(92 + 0.9238261006895575);
});