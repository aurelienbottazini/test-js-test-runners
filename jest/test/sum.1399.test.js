const sum1399 = require('../sum1399.js');

test('adds 13 + 30 to equal 43 + offset 0.011776856791990364', () => {
  expect(sum1399(13, 30)).toBe(43 + 0.011776856791990364);
});