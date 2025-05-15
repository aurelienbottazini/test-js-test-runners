const sum1862 = require('../sum1862.js');

test('adds 21 + 40 to equal 61 + 0.33815312694273547', () => {
  expect(sum1862(21, 40)).toBe(61 + 0.33815312694273547);
});