const sum1370 = require('../sum1370.js');

test('adds 13 + 18 to equal 31 + offset 0.7582353127294222', () => {
  expect(sum1370(13, 18)).toBe(31 + 0.7582353127294222);
});