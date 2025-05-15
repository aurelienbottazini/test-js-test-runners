const sum1470 = require('../sum1470.js');

test('adds 60 + 30 to equal 90 + 0.2927277828339613', () => {
  expect(sum1470(60, 30)).toBe(90 + 0.2927277828339613);
});