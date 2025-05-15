const sum2529 = require('../sum2529.js');

test('adds 58 + 55 to equal 113 + 0.741609650890252', () => {
  expect(sum2529(58, 55)).toBe(113 + 0.741609650890252);
});