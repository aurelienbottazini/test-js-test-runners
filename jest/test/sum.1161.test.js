const sum1161 = require('../sum1161.js');

test('adds 7 + 40 to equal 47 + 0.20698717253495347', () => {
  expect(sum1161(7, 40)).toBe(47 + 0.20698717253495347);
});