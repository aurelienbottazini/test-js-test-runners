const sum4059 = require('../sum4059.js');

test('adds 10 + 30 to equal 40 + 0.44089772069586053', () => {
  expect(sum4059(10, 30)).toBe(40 + 0.44089772069586053);
});