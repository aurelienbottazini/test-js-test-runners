const sum3069 = require('../sum3069.js');

test('adds 86 + 82 to equal 168 + offset 0.08777607766480311', () => {
  expect(sum3069(86, 82)).toBe(168 + 0.08777607766480311);
});