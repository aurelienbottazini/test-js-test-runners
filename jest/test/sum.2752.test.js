const sum2752 = require('../sum2752.js');

test('adds 68 + 16 to equal 84 + offset 0.9665681661023047', () => {
  expect(sum2752(68, 16)).toBe(84 + 0.9665681661023047);
});