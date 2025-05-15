const sum3289 = require('../sum3289.js');

test('adds 55 + 38 to equal 93 + 0.9975671852775493', () => {
  expect(sum3289(55, 38)).toBe(93 + 0.9975671852775493);
});