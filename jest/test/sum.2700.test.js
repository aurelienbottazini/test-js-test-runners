const sum2700 = require('../sum2700.js');

test('adds 69 + 81 to equal 150 + 0.5738253523146052', () => {
  expect(sum2700(69, 81)).toBe(150 + 0.5738253523146052);
});