const sum2741 = require('../sum2741.js');

test('adds 97 + 75 to equal 172 + offset 0.2975566941155966', () => {
  expect(sum2741(97, 75)).toBe(172 + 0.2975566941155966);
});