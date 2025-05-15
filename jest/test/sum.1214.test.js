const sum1214 = require('../sum1214.js');

test('adds 95 + 74 to equal 169 + 0.23793356879043348', () => {
  expect(sum1214(95, 74)).toBe(169 + 0.23793356879043348);
});