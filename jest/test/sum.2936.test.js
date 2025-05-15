const sum2936 = require('../sum2936.js');

test('adds 1 + 56 to equal 57 + 0.13444086512520392', () => {
  expect(sum2936(1, 56)).toBe(57 + 0.13444086512520392);
});