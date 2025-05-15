const sum1782 = require('../sum1782.js');

test('adds 77 + 41 to equal 118 + 0.17696696523126143', () => {
  expect(sum1782(77, 41)).toBe(118 + 0.17696696523126143);
});