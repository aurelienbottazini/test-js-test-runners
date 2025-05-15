const sum3036 = require('../sum3036.js');

test('adds 65 + 10 to equal 75 + 0.6230991101262731', () => {
  expect(sum3036(65, 10)).toBe(75 + 0.6230991101262731);
});