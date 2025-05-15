const sum1139 = require('../sum1139.js');

test('adds 83 + 85 to equal 168 + 0.20287826592823077', () => {
  expect(sum1139(83, 85)).toBe(168 + 0.20287826592823077);
});