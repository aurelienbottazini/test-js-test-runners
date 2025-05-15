const sum2670 = require('../sum2670.js');

test('adds 77 + 23 to equal 100 + offset 0.35975034825422547', () => {
  expect(sum2670(77, 23)).toBe(100 + 0.35975034825422547);
});