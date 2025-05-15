const sum1208 = require('../sum1208.js');

test('adds 23 + 42 to equal 65 + 0.20031254262457965', () => {
  expect(sum1208(23, 42)).toBe(65 + 0.20031254262457965);
});