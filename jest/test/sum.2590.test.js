const sum2590 = require('../sum2590.js');

test('adds 60 + 14 to equal 74 + 0.571885487798667', () => {
  expect(sum2590(60, 14)).toBe(74 + 0.571885487798667);
});