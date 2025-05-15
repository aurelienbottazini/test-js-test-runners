const sum1452 = require('../sum1452.js');

test('adds 65 + 30 to equal 95 + 0.35047658569878626', () => {
  expect(sum1452(65, 30)).toBe(95 + 0.35047658569878626);
});