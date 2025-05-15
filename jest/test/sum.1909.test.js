const sum1909 = require('../sum1909.js');

test('adds 8 + 31 to equal 39 + offset 0.653274641676955', () => {
  expect(sum1909(8, 31)).toBe(39 + 0.653274641676955);
});