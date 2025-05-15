const sum1430 = require('../sum1430.js');

test('adds 2 + 11 to equal 13 + offset 0.7414288096745193', () => {
  expect(sum1430(2, 11)).toBe(13 + 0.7414288096745193);
});