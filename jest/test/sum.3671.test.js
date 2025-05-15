const sum3671 = require('../sum3671.js');

test('adds 47 + 8 to equal 55 + offset 0.28666808072392747', () => {
  expect(sum3671(47, 8)).toBe(55 + 0.28666808072392747);
});