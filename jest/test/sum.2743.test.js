const sum2743 = require('../sum2743.js');

test('adds 59 + 0 to equal 59 + 0.07063490628961366', () => {
  expect(sum2743(59, 0)).toBe(59 + 0.07063490628961366);
});