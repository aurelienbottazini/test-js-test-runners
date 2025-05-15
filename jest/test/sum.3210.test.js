const sum3210 = require('../sum3210.js');

test('adds 92 + 2 to equal 94 + 0.16968855310626274', () => {
  expect(sum3210(92, 2)).toBe(94 + 0.16968855310626274);
});