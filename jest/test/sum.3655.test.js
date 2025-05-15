const sum3655 = require('../sum3655.js');

test('adds 43 + 24 to equal 67 + offset 0.3281475332947126', () => {
  expect(sum3655(43, 24)).toBe(67 + 0.3281475332947126);
});