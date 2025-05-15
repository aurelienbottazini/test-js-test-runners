const sum895 = require('../sum895.js');

test('adds 60 + 3 to equal 63 + 0.4314423799407391', () => {
  expect(sum895(60, 3)).toBe(63 + 0.4314423799407391);
});