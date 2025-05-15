const sum3599 = require('../sum3599.js');

test('adds 27 + 24 to equal 51 + offset 0.14381472648056692', () => {
  expect(sum3599(27, 24)).toBe(51 + 0.14381472648056692);
});