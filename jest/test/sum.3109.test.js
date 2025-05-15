const sum3109 = require('../sum3109.js');

test('adds 30 + 24 to equal 54 + 0.46607244246797297', () => {
  expect(sum3109(30, 24)).toBe(54 + 0.46607244246797297);
});