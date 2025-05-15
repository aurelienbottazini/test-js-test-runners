const sum2063 = require('../sum2063.js');

test('adds 3 + 69 to equal 72 + offset 0.527743607231841', () => {
  expect(sum2063(3, 69)).toBe(72 + 0.527743607231841);
});