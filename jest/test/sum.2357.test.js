const sum2357 = require('../sum2357.js');

test('adds 97 + 71 to equal 168 + 0.17435662464186064', () => {
  expect(sum2357(97, 71)).toBe(168 + 0.17435662464186064);
});