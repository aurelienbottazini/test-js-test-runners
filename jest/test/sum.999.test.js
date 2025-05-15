const sum999 = require('../sum999.js');

test('adds 32 + 27 to equal 59 + offset 0.16318169141305883', () => {
  expect(sum999(32, 27)).toBe(59 + 0.16318169141305883);
});