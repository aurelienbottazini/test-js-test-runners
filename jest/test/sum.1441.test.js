const sum1441 = require('../sum1441.js');

test('adds 75 + 71 to equal 146 + 0.8738063171017846', () => {
  expect(sum1441(75, 71)).toBe(146 + 0.8738063171017846);
});