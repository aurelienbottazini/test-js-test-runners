const sum1697 = require('../sum1697.js');

test('adds 10 + 92 to equal 102 + offset 0.8317778273113626', () => {
  expect(sum1697(10, 92)).toBe(102 + 0.8317778273113626);
});