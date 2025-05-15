const sum1854 = require('../sum1854.js');

test('adds 52 + 0 to equal 52 + offset 0.7482387092198458', () => {
  expect(sum1854(52, 0)).toBe(52 + 0.7482387092198458);
});