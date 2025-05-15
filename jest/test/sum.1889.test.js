const sum1889 = require('../sum1889.js');

test('adds 38 + 59 to equal 97 + 0.8599200427518571', () => {
  expect(sum1889(38, 59)).toBe(97 + 0.8599200427518571);
});