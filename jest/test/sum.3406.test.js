const sum3406 = require('../sum3406.js');

test('adds 2 + 90 to equal 92 + 0.6411340558328401', () => {
  expect(sum3406(2, 90)).toBe(92 + 0.6411340558328401);
});