const sum3573 = require('../sum3573.js');

test('adds 80 + 85 to equal 165 + offset 0.29863767233292426', () => {
  expect(sum3573(80, 85)).toBe(165 + 0.29863767233292426);
});