const sum2019 = require('../sum2019.js');

test('adds 90 + 88 to equal 178 + offset 0.5063849113297619', () => {
  expect(sum2019(90, 88)).toBe(178 + 0.5063849113297619);
});