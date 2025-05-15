const sum724 = require('../sum724.js');

test('adds 24 + 31 to equal 55 + 0.3253953745002627', () => {
  expect(sum724(24, 31)).toBe(55 + 0.3253953745002627);
});