const sum3325 = require('../sum3325.js');

test('adds 51 + 58 to equal 109 + 0.9907709272017872', () => {
  expect(sum3325(51, 58)).toBe(109 + 0.9907709272017872);
});