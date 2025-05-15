const sum2325 = require('../sum2325.js');

test('adds 15 + 55 to equal 70 + 0.5673582067739146', () => {
  expect(sum2325(15, 55)).toBe(70 + 0.5673582067739146);
});