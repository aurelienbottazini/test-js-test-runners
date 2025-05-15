const sum2146 = require('../sum2146.js');

test('adds 83 + 43 to equal 126 + 0.6024876990131011', () => {
  expect(sum2146(83, 43)).toBe(126 + 0.6024876990131011);
});